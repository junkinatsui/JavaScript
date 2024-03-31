let number1 = 100;
let number2 = "100";
let boolean_flag = false;

if (number1 > 100) {
    number1 =200;
} else if (number1 !== number2) {
    boolean_flag = true;
    number1 += 300;
} else {
    boolean_flag = true;
    number1 = 300;
}

if (number1 >= 400 && boolean_flag) {
    console.log("出力結果A");
} else {
    console.log("出力結果B");
}

let weather = "晴れ";

switch (weather) {
    case "晴れ":
        console.log("今日の天気は晴れです。");
        break;
    case "曇り":
        console.log("今日は曇りです。");
        break;
    case "雨":
        console.log("今日は雨です。");
        break;
    default:
        console.log("天気が不明です。");
}