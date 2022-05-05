export interface RawLogAnalysis {
	"3player": RawThreePlayerGameStats;
	"4player": RawFourPlayerGameStats;
	uuids: number[];
}

export interface RawThreePlayerGameStats {
	[nickname: string]: RawThreePlayerGameStat;
}

export interface RawThreePlayerGameStat {
	totalGames: number;
	"1": number;
	"2": number;
	"3": number;
}

export interface RawFourPlayerGameStats {
	[nickname: string]: RawFourPlayerGameStat;
}

export interface RawFourPlayerGameStat extends RawThreePlayerGameStat {
	"4": number;
}

export interface FourPlayerGameStat {
	player: string;
	rank: number;
	firstRatio: number;
	upperSecondRatio: number;
	totalGames: number;
}
