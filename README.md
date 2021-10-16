### Get Start

#### Run with code
- clone this project and then run this command `npm install`
- replace googleAPI key in `config/default.json` (you have to rename the file to default.json)
- start project with `npm run dev` or `npm run build` and then `npm run start` for old javascript version.

#### Call from API
- API prefix is https://jenosizu.herokuapp.com/jenosize/api follow by path below.

#### Find nearby restaurants
| Path | Method | Description |
| ---- | ------ | ----------- | 
| /place | GET | get a list of restaurants nearby the default location.|
| /place?query   | GET | add a query to filter the place.

- Query string for `/place` <br>
- example https://jenosizu.herokuapp.com/jenosize/api/place?keyword=thai

| Query | Type | Description |
| ------ | ------- | -----|
|keyword | string | filter similarly place like a keyword.|
|lat | decimal | latitude of your location.|
|lon | decimal | longitude of your location.|

- `lat` and `lon` should fill both of them. it can not be searched just one of them 
<br>

#### Game 24

| Path | Method | Payload | Description |
| ---- | ------ | ----- | ------ | 
| /game24 | POST| { value: int[] } | get the result if it has solution to calculate to 24|

- example payload : `{value : [1,2,3,4]}`

<br>

#### Tic Tac Toe

| Path | Method | Payload | Description |
| ---- | ------ | ----- | ------ | 
| /tic-tac-toe | POST| { state: string[] } | get the next borad state (AI move) and the winner if winner is exist.|

- example payload: `state: ["X", "O", "", "", "", "", "", "", "X"]`
- in each element should be uppercase.

-board view should be displayed like this 
```
["X", "O", "",
  "", "", "",
  "", "", "X"]
```



