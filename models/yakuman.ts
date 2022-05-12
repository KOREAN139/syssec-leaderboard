export interface RawYakuman {
  yakumans: string[],
  hules: Hule,
  point: number,
  nickname: string,
  timestamp: number,
}

interface Hule {
  hand: string[],
  huTile: string,
  qinjia?: boolean,
  doras?: string[],
  yiman?: boolean,
  count?: number,
  fans: Fan[],
  fu?: number,
  pointRong?: number,
  pointZimoXian?: number,
  titleId?: number,
  pointSum?: number,
  dadian?: number,
  seat: number,
}

interface Fan {
  val: number,
  yaku: string,
}

export interface YakumanHistory {
  yakumans: string[],
  nickname: string,
  timestamp: number,
  hand: string[],
  huTile: string,
}