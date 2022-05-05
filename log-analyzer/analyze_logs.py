import os
import json
import sys
import logging

from yaku import YAKU_MAP

logging.basicConfig(
    level=logging.INFO, format="%(asctime)s %(levelname)s: %(message)s", datefmt="%Y-%m-%d %H:%M:%S"
)

LOG_FOLDER = "../logs"
LOG_ANALYSIS_FILE_PATH = "../public/log-analysis.json"

def main():
    analysis = get_previous_analysis()

    uuids = sys.argv[1:]
    for uuid in uuids:
        uuid = uuid.strip()
        if uuid in analysis["uuids"]:
            logging.info(f"Skip {uuid} - Previously analyzed")
            continue

        logging.info(f"Analyzing {uuid}")
        analysis["uuids"].append(uuid)

        num_of_players, result = analyze(uuid)
        mode = f"{num_of_players}player"
        for player, game_stat in result.items():
            stat = analysis[mode].get(player, {
                "total_games": 0,
                "1": 0,
                "2": 0,
                "3": 0,
                "4": 0,
                "yakus": {},
            })

            # Count up rank
            stat["total_games"] += 1
            stat[str(game_stat["rank"])] += 1
            if num_of_players == 3:
                del stat["4"]

            # Count up yaku
            if "yakus" not in game_stat:
                continue
            for yaku in game_stat["yakus"]:
                stat["yakus"][yaku] = stat["yakus"].get(yaku, 0) + 1

            analysis[mode][player] = stat

    update_analysis(analysis)

    return True


def get_previous_analysis():
    previous_analysis = {
        "3player": {},
        "4player": {},
        "uuids": []
    }

    if os.path.exists(LOG_ANALYSIS_FILE_PATH):
        with open(LOG_ANALYSIS_FILE_PATH, "r") as f:
            previous_analysis = json.load(f)

    return previous_analysis

def analyze(game_uuid):
    log = {}
    with open(f"{LOG_FOLDER}/{game_uuid}.json", "r") as f:
        log = json.loads(f.read())

    players = log["meta"]["result"]["players"]
    def final_point(r):
        return r["partPoint1"]
    players.sort(key=final_point, reverse=True)

    # Analyze ranks
    accounts = log["meta"]["accounts"]
    analysis_result = {}
    for idx, player in enumerate(players):
        rank = idx + 1
        account = next(account for account in accounts if account["seat"] == player["seat"])
        analysis_result[account["nickname"]] = { "rank": rank }

    # Analyze yakus
    hule_records = [record for record in log["records"] if record["name"] == "RecordHule"]
    for hule_record in hule_records:
        for hule in hule_record["data"]["hules"]:
            yakus = [YAKU_MAP[fan["id"]] for fan in hule["fans"]]
            account = next(account for account in accounts if account["seat"] == hule["seat"])
            analysis_result[account["nickname"]]["yakus"] = yakus

    return len(players), analysis_result

def update_analysis(analysis):
    with open(LOG_ANALYSIS_FILE_PATH, "w") as f:
        f.write(json.dumps(analysis, separators=(',', ':')))

    return True

if __name__ == "__main__":
    main()
