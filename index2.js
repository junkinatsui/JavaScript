

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
  const operandList = calculation.replace(/ /g, "").split(/\+|\-|\*|\//);
  const decimals = operandList.filter(function(number) {
    return number.includes(Calculator.DECIMAL_POINT);
  })
  if (!!decimals.length) {
    const decimalPointPositions = decimals.map(function (decimal) {
        return (decimal.length -1) - decimal.lastIndexOf('.');
      })
      let maxDecimalPointPosition = Math.max(...decimalPointPositions);
      const splitCalculation = display.innerHTML.split(" ");

      for (let i = 0; i < operandList.length; i++) {
        let index = splitCalculation.indexOf(operandList[i]);
  
        splitCalculation[index] = operandList[i] * (10 ** maxDecimalPointPosition);
      }
      const multiplyCount = splitCalculation.filter(val => val === Calculator.MULTIPLY_OPERATOR).length;
    const divisionCount = splitCalculation.filter(val => val === Calculator.DIVISION_OPERATOR).length;
    maxDecimalPointPosition = maxDecimalPointPosition + multiplyCount - divisionCount;

    display.innerHTML = eval(splitCalculation.join('')) / (10 ** maxDecimalPointPosition);
  } else {
    display.innerHTML = eval(calculation);
  }
  
  function isLastCharOperator() {
    const lastChar = display.innerHTML.replace(/ /g, "").slice(-1);
    return Calculator.OPERATORS.includes(lastChar);
  }
  function isLastCharDecimalPoint() {
    const lastChar = display.innerHTML.replace(/ /g, "").slice(-1);
    return lastChar === Calculator.DECIMAL_POINT;
  }
  

  function isCurrentNumberDecimal() {
    const currentNumber = display.innerHTML.replace(/ /g, "").split(/\+|\-|\*|\//).slice(-1)[0];
    return currentNumber.includes(Calculator.DECIMAL_POINT);
  }
  
  const display = document.getElementById("js-display");
  

  const calculator = new Calculator();  
