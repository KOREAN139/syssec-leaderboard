## HOW TO USE
```
$ python3 analyze_logs.py UUID1 [UUID2 ...]
```

### ANALYSIS STRUCTURE
```
{
  "3player": {
    NICKNAME1: {
      "totalGames": number,
      "1": number,
      "2": number,
      "3": number,
      "yakus": [
        "역 이름": number,
        ...
      ]
    },
    ...
  },
  "4player": {
    NICKNAME1: {
      "totalGames": number,
      "1": number,
      "2": number,
      "3": number,
      "4": number,
      "yakus": [
        "역 이름": number,
        ...
      ]
    },
    ...
  },
  "uuids": [UUID1, UUID2, ...]
}
```

`3player` - 3인 마작 통계

`4player` - 4인 마작 통계

`NICKNAME` - 작혼에서 사용되는 닉네임

`totalGames` - 총 국수

`1 ~ 4` - 해당 순위를 한 국수

`yakus` - 역 이름과 해당 역이 발생한 수

`uuids` - 분석에 사용된 로그 uuid들


### YAKUMAN STRUCTURE
```
[
  {
    "nickname": string,
    "yakumans": string[],
    "hules": RecordHuleInfo,
    "points": number,
    "timestamp": timestmap,
  },
  ...
]
```

`nickname` - 작혼에서 사용되는 닉네임

`yakumans` - 성공한 역만 종류 리스트 (더블역만, 트리플역만 등 중첩 역만 가능성이 있으므로 리스트로 관리)

`hules` - [proto 파일](https://github.com/KOREAN139/syssec-leaderboard/blob/master/log-fetcher/ms/protocol.proto#L1570) 참조

`points` - 역만으로 얻은 점수

`timestamp` - epoch & unix timestamp
