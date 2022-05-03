## HOW TO USE
```
$ python3 analyze_logs.py UUID1 [UUID2 ...]
```

### CURRENT ANALYSIS STRUCTURE
```
{
  "3player": {
    NICKNAME1: {
      "total_games": number,
      "1": number,
      "2": number,
      "3": number,
    },
    ...
  },
  "4player": {
    NICKNAME1: {
      "total_games": number,
      "1": number,
      "2": number,
      "3": number,
      "4": number,
    },
    ...
  }
}
```

`3player` - 3인 마작 통계
`4player` - 4인 마작 통계
`NICKNAME` - 작혼에서 사용되는 닉네임
`total_games` - 총 국수
`1 ~ 4` - 해당 순위를 한 국수
