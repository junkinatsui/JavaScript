

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

function sumSelectNumber(number1,number2) {
    let resultSum = 0;
    resultSum = number1 + number2;
    return resultSum;
}
console.log(sumSelectNumber(200,400));


let result = sumSelectNumber(100,200);
console.log(result); 

$(document).ready(function(){
    $(document).行たい処理など
});

class Calculator {
    static OPERATORS = ["+", "-", "*", "/"];
    static MULTIPLY_OPERATOR = "*";
    static DIVISION_OPERATOR = "/";
    static DECIMAL_POINT = ".";
  }
  
  function selectNumber(number) {
    if (display.innerHTML == "0" || display.innerHTML == "00") {
      return display.innerHTML = number;
    }
  
    display.innerHTML += number;
  }
  
  function addNumber() {
    if (isLastCharOperator() || isLastCharDecimalPoint()) return;
  
    display.innerHTML += " + ";
  }
  function subtractNumber() {
    if (isLastCharOperator() || isLastCharDecimalPoint()) return;
  
    display.innerHTML += " - ";
  }
  
  function multiplyNumber() {
    if (isLastCharOperator() || isLastCharDecimalPoint()) return;
  
    display.innerHTML += " * ";
  }
  
  function divideNumber() {
    if (isLastCharOperator() || isLastCharDecimalPoint()) return;
  
    display.innerHTML += " / ";
  }
  
  function addDecimalPoint() {
    if (isLastCharOperator() || isLastCharDecimalPoint()) return;
  
    if (isCurrentNumberDecimal()) return;
  
    display.innerHTML += ".";
  }
  
  function clearNumber() {
    display.innerHTML = "0";
  }
  
  function calcNumber() {
    let calculation = display.innerHTML;
  }