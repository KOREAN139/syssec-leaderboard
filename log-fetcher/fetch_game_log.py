import asyncio
import hashlib
import hmac
import logging
import random
import uuid
import os
import json
import sys

import aiohttp

from ms.base import MSRPCChannel
from ms.rpc import Lobby
import ms.protocol_pb2 as pb
from google.protobuf.json_format import MessageToJson



logging.basicConfig(
    level=logging.INFO, format="%(asctime)s %(levelname)s: %(message)s", datefmt="%Y-%m-%d %H:%M:%S"
)

MS_HOST = "https://game.maj-soul.com"
LOG_FOLDER = "../logs"

async def main():
    """
    Login to the CN server get tournament log.
    """
    game_uuids = sys.argv[1:]

    lobby, channel, client_version_string = await connect()
    await login(lobby, client_version_string)
    for game_uuid in game_uuids:
        await load_game_log(lobby, client_version_string, game_uuid.strip())
    await channel.close()


async def connect():
    async with aiohttp.ClientSession() as session:
        async with session.get("{}/1/version.json".format(MS_HOST)) as res:
            version = await res.json()
            logging.info(f"Version: {version}")
            version = version["version"]
            version_to_force = version.replace(".w", "")

        async with session.get("{}/1/v{}/config.json".format(MS_HOST, version)) as res:
            config = await res.json()
            logging.info(f"Config: {config}")

            url = config["ip"][0]["region_urls"][1]["url"]

        async with session.get(url + "?service=ws-gateway&protocol=ws&ssl=true") as res:
            servers = await res.json()
            logging.info(f"Available servers: {servers}")

            servers = servers["servers"]
            server = random.choice(servers)
            endpoint = "wss://{}/".format(server)

    logging.info(f"Chosen endpoint: {endpoint}")
    channel = MSRPCChannel(endpoint)

    lobby = Lobby(channel)

    await channel.connect(MS_HOST)
    logging.info("Connection was established")

    client_version_string = f"web-{version_to_force}"

    return lobby, channel, client_version_string


async def login(lobby, client_version_string):
    logging.info("Login with username and password")

    account = os.getenv("MAJSOUL_ACCOUNT")
    password = os.getenv("MAJSOUL_PASSWORD")

    req = pb.ReqLogin()
    req.account = account
    req.password = hmac.new(b"lailai", password.encode(), hashlib.sha256).hexdigest()
    req.device.is_browser = True
    req.random_key = str(uuid.uuid4())
    req.gen_access_token = True
    req.client_version_string = client_version_string
    req.currency_platforms.append(2)

    res = await lobby.login(req)
    if res.error.code != 0:
        logging.error("Login Error:")
        logging.error(res.error)
        return False

    return True

async def load_game_log(manager_api, client_version_string, game_uuid):
    logging.info(f"Loading tournament log {game_uuid}")

    req = pb.ReqGameRecord()
    req.game_uuid = game_uuid
    req.client_version_string = client_version_string

    res = await manager_api.fetch_game_record(req)
    if res.error.code != 0:
        logging.error("Fetch game record Error:")
        logging.error(res.error)

    process_raw_record(res)

    return True

def process_raw_record(raw_record):
    logging.info(f"Processing tournament log {game_uuid}")

    wrapper = pb.Wrapper()
    wrapper.ParseFromString(raw_record.data)

    details = pb.GameDetailRecords()
    details.ParseFromString(wrapper.data)

    records = []

    record_items = (
        action.result for action in details.actions
        if hasattr(action, "result") and len(action.result) > 0
    )

    for item in record_items:
        round_record_wrapper = pb.Wrapper()
        round_record_wrapper.ParseFromString(item)
        round_record_classname = round_record_wrapper.name[4:]
        round_record_class = getattr(pb, round_record_classname)
        round_record = round_record_class()
        round_record.ParseFromString(round_record_wrapper.data)

        record = {
                "name": round_record_classname,
                "data": json.loads(MessageToJson(round_record)),
        }

        # set room-maker seat as 0
        if (
            "seat" not in record["data"] and
            round_record_classname != "RecordHule" and
            round_record_classname != "RecordNewRound"
           ):
            record["data"]["seat"] = 0

        # set room-maker seat as 0
        if round_record_classname == "RecordHule":
            for hule in record["data"]["hules"]:
                if "seat" not in hule:
                    hule["seat"] = 0

        # set room-maker seat as 0
        if round_record_classname == "RecordNewRound":
            for op in record["data"]["opens"]:
                if "seat" not in op:
                    op["seat"] = 0

        records.append(record)

    game_meta_data = json.loads(MessageToJson(raw_record))
    if "data" in game_meta_data:
        del game_meta_data["data"]

    # remove privacy-sensitive information
    accounts = []
    for account in game_meta_data["head"]["accounts"]:
        accounts.append(
            {
                "nickname": account["nickname"],
                "seat": account.get("seat", 0)
            }
        )

    # set room-maker seat as 0
    for player in game_meta_data["head"]["result"]["players"]:
        if "seat" not in player:
            player["seat"] = 0

    game_meta_data["head"]["accounts"] = accounts

    log = {
        "meta": game_meta_data["head"],
        "records": records
    }

    game_uuid = log["meta"]["uuid"]
    with open(f"{LOG_FOLDER}/{game_uuid}.json", "w") as f:
        f.write(json.dumps(log, separators=(',', ':')))

    return True

if __name__ == "__main__":
    asyncio.run(main())
