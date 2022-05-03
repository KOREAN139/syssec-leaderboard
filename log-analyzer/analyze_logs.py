import os
import json
import sys

LOG_FOLDER = "../logs"
LOG_ANALYSIS_FILE_PATH = "../public/log-analysis.json"

def main():
    analysis = get_previous_analysis()

    uuids = sys.argv[1:]
    for uuid in uuids:
        num_of_players, result = analyze(uuid.strip())
        mode = f"{num_of_players}player"
        for player, rank in result.items():
            stat = analysis[mode].get(player, {
                "total_games": 0,
                "1": 0,
                "2": 0,
                "3": 0,
                "4": 0,
            })
            stat["total_games"] += 1
            stat[str(rank)] += 1
            if num_of_players == 3:
                del stat["4"]
            analysis[mode][player] = stat

    update_analysis(analysis)

    return True


def get_previous_analysis():
    previous_analysis = {
        "3player": {},
        "4player": {}
    }

    if os.path.exists(LOG_ANALYSIS_FILE_PATH):
        with open(LOG_ANALYSIS_FILE_PATH, "r") as f:
            previous_analysis = json.load(f.read())

    return previous_analysis

def analyze(game_uuid):
    log = {}
    with open(f"{LOG_FOLDER}/{game_uuid}.json", "r") as f:
        log = json.loads(f.read())

    players = log["meta"]["result"]["players"]
    def final_point(r):
        return r["partPoint1"]
    players.sort(key=final_point, reverse=True)

    accounts = log["meta"]["accounts"]
    analysis_result = {}
    for idx, player in enumerate(players):
        rank = idx + 1
        account = next(account for account in accounts if account["seat"] == player["seat"])
        analysis_result[account["nickname"]] = rank

    return len(players), analysis_result

def update_analysis(analysis):
    with open(LOG_ANALYSIS_FILE_PATH, "w") as f:
        f.write(json.dumps(analysis, separators=(',', ':')))

    return True

if __name__ == "__main__":
    main()
