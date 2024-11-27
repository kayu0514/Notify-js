const Notify = require('./Notify');

(async () => {
    try {
        const notify = new Notify("you token");

        // トークンが有効か確認
        await notify.checkToken();

        // 送信メッセージ
        const message = "Hi, I am kayu0514 :)";
        console.log("Message to be sent:", message); // デバッグ用ログ

        // メッセージを送信
        await notify.SendMessage(message, false);
    } catch (error) {
        console.error("Error:", error.message);
    }
})();
