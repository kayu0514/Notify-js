# Line Notify JS

Line Notfyの送信などをjavascriptでまとめてみた

## ライブラリ
```
npm install qs
npm install axios
```

## Function
- SendMessage
- checkToken

## Token
LINE Notifyのトークン取得方法

[ここ](https://notify-bot.line.me/ja/)からアカウントを登録してトークンを取得

発行されたトークンをコピーして"main.js"を開き以下のyou tokenにおいてね

```
const notify = new Notify("you token");
```

## Usage

#### 送信
```
const message = "Hi, I am kayu0514 :)";
await notify.SendMessage(message, false);
```
