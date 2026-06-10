//main.js

import { fadeIn } from "./fadein.js";
import { showTime } from "./time.js";
import { codeToText } from "./weatherText.js";

// ボタンを押したら天気を取りに行く
document.getElementById("getBtn").addEventListener("click", () => {
  getWeather();
});
// 天気を取得して表示する非同期関数
async function getWeather() {
  // 名古屋の現在の天気を取得するURL
  const url = "https://api.open-meteo.com/v1/forecast?latitude=35.18&longitude=136.91&current_weather=true";
  
  // ① URLにデータをお願いする（返事を待つ）
  const response = await fetch(url);

  // ② 返ってきたデータをJSONとして取り出す（これも待つ）
  const data = await response.json();

  // ③ 必要な値を取り出す（オブジェクトのプロパティアクセス！）
  const temp = data.current_weather.temperature;
  const code = data.current_weather.weathercode;

  // 自作ライブラリで数字→日本語に変換
  const weather = codeToText(code);

  // ④ DOMに表示する
  document.getElementById("temp1").textContent =
    `${weather}`;
  document.getElementById("temp2").textContent =
    `${temp}℃`;

    showTime();

    fadeIn(time);
    fadeIn(temp1);
    fadeIn(temp2);

    // ⑤ デバッグ用：返ってきた全データをコンソールで確認
  console.log(data);
}


