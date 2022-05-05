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
    new_uuids = [uuid for uuid in uuids if uuid not in analysis["uuids"]]
    for uuid in new_uuids:
        logging.info(f"Analyzing {uuid}")
        analysis["uuids"].append(uuid)

        num_of_players, result = analyze(uuid)
        mode = f"{num_of_players}player"
        for player, game_analysis in result.items():
            stat = analysis[mode].get(player, {
                "total_games": 0,
                "1": 0,
                "2": 0,
                "3": 0,
                "4": 0,
                "yakus": {},
            })

            stat["total_games"] += 1
            stat[str(game_analysis["rank"])] += 1
            if num_of_players == 3:
                del stat["4"]

            for yaku in game_analysis["yakus"]:
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

    metadata = log["meta"]
    rank_analysis = analyze_rank(metadata)

    records = log["records"]
    yaku_analysis = analyze_yaku(records)

    analysis = {}
    for account in metadata["accounts"]:
        analysis[account["nickname"]] = {
            "rank": rank_analysis[account["seat"]],
            "yakus": yaku_analysis.get(account["seat"], []),
        }

    return len(metadata["accounts"]), analysis

def analyze_rank(metadata):
    rank_analysis = {}
    players = metadata["result"]["players"]
    def final_point(r):
        return r["partPoint1"]
    players.sort(key=final_point, reverse=True)

    for idx, player in enumerate(players):
        rank = idx + 1
        rank_analysis[player["seat"]] = rank
    return rank_analysis

def analyze_yaku(records):
    yaku_analysis = {}
    hule_records = [record for record in records if record["name"] == "RecordHule"]

    for hule_record in hule_records:
        for hule in hule_record["data"]["hules"]:
            yakus = [YAKU_MAP[fan["id"]] for fan in hule["fans"]]
            yaku_analysis[hule["seat"]] = yakus
    return yaku_analysis

def update_analysis(analysis):
    with open(LOG_ANALYSIS_FILE_PATH, "w") as f:
        f.write(json.dumps(analysis, separators=(',', ':'), ensure_ascii=False))

    return True

if __name__ == "__main__":
    main()
