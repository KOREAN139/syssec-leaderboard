import os
import json
import sys
import logging

from yaku import IMPORTANT_YAKUS, YAKU_MAP

logging.basicConfig(
    level=logging.INFO, format="%(asctime)s %(levelname)s: %(message)s", datefmt="%Y-%m-%d %H:%M:%S"
)

LOG_FOLDER = "../logs"
LOG_ANALYSIS_FILE_PATH = "../public/log-analysis.json"
YAKUMAN_LOG_FILE_PATH = "../public/yakuman.json"

def main():
    analysis = get_previous_analysis()
    yakuman_log = get_previous_yakumans()

    uuids = sys.argv[1:]
    new_uuids = [uuid for uuid in uuids if uuid not in analysis["uuids"]]
    for uuid in new_uuids:
        logging.info(f"Analyzing {uuid}")
        analysis["uuids"].append(uuid)

        num_of_players, result, yakumans = analyze(uuid)
        yakuman_log += yakumans

        mode = f"{num_of_players}player"
        for player, game_analysis in result.items():
            stat = analysis[mode].get(player, {
                "totalGames": 0,
                "1": 0,
                "2": 0,
                "3": 0,
                "4": 0,
                "yakus": {},
            })

            stat["totalGames"] += 1
            stat[str(game_analysis["rank"])] += 1
            if num_of_players == 3 and "4" in stat:
                del stat["4"]

            for yaku in game_analysis["yakus"]:
                stat["yakus"][yaku] = stat["yakus"].get(yaku, 0) + 1

            analysis[mode][player] = stat

    update_analysis(analysis)
    update_yakumans(yakuman_log)

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

def get_previous_yakumans():
    previous_yakumans = []

    if os.path.exists(YAKUMAN_LOG_FILE_PATH):
        with open(YAKUMAN_LOG_FILE_PATH, "r") as f:
            previous_yakumans = json.load(f)

    return previous_yakumans

def analyze(uuid):
    log = {}
    with open(f"{LOG_FOLDER}/{uuid}.json", "r") as f:
        log = json.loads(f.read())

    metadata = log["meta"]
    rank_analysis = analyze_rank(metadata)

    records = log["records"]
    yaku_analysis, yakumans = analyze_yaku(records)

    seat_nickname_map = {acc["seat"]: acc["nickname"] for acc in metadata["accounts"]}
    for yakuman in yakumans:
        yakuman["nickname"] = seat_nickname_map[yakuman["seat"]]
        yakuman["timestamp"] = metadata["startTime"]
        del yakuman["seat"]

    analysis = {}
    for account in metadata["accounts"]:
        analysis[account["nickname"]] = {
            "rank": rank_analysis[account["seat"]],
            "yakus": yaku_analysis.get(account["seat"], []),
        }

    return len(metadata["accounts"]), analysis, yakumans

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
    yakumans = []
    hule_records = [record for record in records if record["name"] == "RecordHule"]

    for hule_record in hule_records:
        for hule in hule_record["data"]["hules"]:
            yakus = [YAKU_MAP[fan["id"]] for fan in hule["fans"]]
            yaku_analysis[hule["seat"]] = yakus

            yakuman = check_yakuman(yakus, hule["count"])
            if not yakuman:
                continue

            hule["fans"] = [{"val": fan["val"], "yaku": YAKU_MAP[fan["id"]]} for fan in hule["fans"]]
            yakumans.append({
                "seat": hule["seat"],
                "yakumans": yakuman,
                "hules": hule,
                "point": [score for score in hule_record["data"]["deltaScores"] if score > 0][0],
            })

    return yaku_analysis, yakumans

def check_yakuman(yakus, fan_count):
    yakuman = [yaku for yaku in yakus if yaku in IMPORTANT_YAKUS]
    if not yakuman and fan_count >= 13:
        yakuman = ["헤아림역만"]

    return yakuman

def update_analysis(analysis):
    with open(LOG_ANALYSIS_FILE_PATH, "w") as f:
        f.write(json.dumps(analysis, separators=(',', ':'), ensure_ascii=False))

    return True

def update_yakumans(yakuman_log):
    with open(YAKUMAN_LOG_FILE_PATH, "w") as f:
        f.write(json.dumps(yakuman_log, separators=(',', ':'), ensure_ascii=False))

    return True

if __name__ == "__main__":
    main()
