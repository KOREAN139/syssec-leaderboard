import asyncio
import hashlib
import hmac
import logging
import random
import uuid
import os

import aiohttp

from ms.base import MSRPCChannel
from ms.rpc import Lobby
import ms.protocol_pb2 as pb


logging.basicConfig(
    level=logging.INFO, format="%(asctime)s %(levelname)s: %(message)s", datefmt="%Y-%m-%d %H:%M:%S"
)

MS_HOST = "https://game.maj-soul.com"

async def main():
    """
    Login to the CN server get tournament log.
    """
    lobby, channel, client_version_string = await connect()
    await login(lobby, client_version_string)
    await load_game_log(lobby, client_version_string, "")
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
    logging.info("Loading tournament log...")

    req = pb.ReqGameRecord()
    req.game_uuid = game_uuid
    req.client_version_string = client_version_string

    res = await manager_api.fetch_game_record(req)
    if res.error.code != 0:
        logging.error("Fetch game record Error:")
        logging.error(res.error)

    return True

if __name__ == "__main__":
    asyncio.run(main())
