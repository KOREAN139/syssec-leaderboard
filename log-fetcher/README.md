Code based on this [repository](https://github.com/MahjongRepository/mahjong_soul_api)

## REQUIRED ENVIRONMENT VARIABLES
| env variable name | description                        |
|-------------------|------------------------------------|
| MAJSOUL_ACCOUNT   | email of mahjong soul CN server    |
| MAJSOUL_PASSWORD  | password of mahjong soul CN server |

## HOW TO USE
```
$ pip3 install -r requirements.txt
$ python3 fetch_game_log.py UUID1 [UUID2 ...]
```

## HOW TO UPDATE
1. Download the new `liqi.json` file from MS (find it in the network tab of your browser) and put it to `ms/liqi.json`
1. `python generate_proto_file.py`
1. `protoc --python_out=. protocol.proto`
1. `chmod +x ms-plugin.py`
1. `protoc --custom_out=. --plugin=protoc-gen-custom=ms-plugin.py ./protocol.proto`
