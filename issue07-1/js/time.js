//time.js
// 現在時刻を表示する
export function showTime() {

    const now = new Date();

    const hour = String(now.getHours()).padStart(2, "0");
    const minute = String(now.getMinutes()).padStart(2, "0");
    const second = String(now.getSeconds()).padStart(2, "0");

    document.getElementById("time").textContent =
        `${hour}:${minute}:${second}`;
}