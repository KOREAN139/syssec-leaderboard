import { FourPlayerGameStat, RawFourPlayerGameStats } from '@/models/log-analysis';
import { YakumanHistory } from '@/models/yakuman';
import logAnalysis from '@/public/log-analysis.json';
import yakumanLog from '@/public/yakuman.json';

export const getFourPlayerGameStats = (): FourPlayerGameStat[] => {
	const fourPlayerGameLogs = logAnalysis["4player"] as RawFourPlayerGameStats;
	const fourPlayerGameStats = Object.keys(fourPlayerGameLogs).map(player => {
		const gameStat = fourPlayerGameLogs[player];
		const { "1": numOfFirst, "2": numOfSecond, totalGames } = gameStat;

		return {
			player,
			"rank": 0,
			"firstRatio": numOfFirst / totalGames * 100,
			"upperSecondRatio": (numOfFirst + numOfSecond) / totalGames * 100,
			totalGames,
		};
	});

	const statSortFn = (playerA: FourPlayerGameStat, playerB: FourPlayerGameStat) => {
		if (playerA.firstRatio == playerB.firstRatio) {
			return playerB.upperSecondRatio - playerA.upperSecondRatio;
		}
	  return playerB.firstRatio - playerA.firstRatio;
	};
	fourPlayerGameStats.sort(statSortFn).forEach((stat, i) => stat["rank"] = i + 1);

	return fourPlayerGameStats;
};

export const getYakumanHistories = (): YakumanHistory[] => {
	const yakumanHistories = yakumanLog.map(({ yakumans, hules, nickname, timestamp }) => ({
		yakumans,
		nickname,
		timestamp,
		hand: hules["hand"],
		huTile: hules["huTile"],
	}));

	return yakumanHistories;
};