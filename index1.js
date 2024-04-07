console.log("この文字がコンソール表示されます。");
let age = 25;
const name = 'Alice';

console.log(name + 'is' + age + 'years old.');

age = 26;

console.log(name + 'will be' + age + 'next year.')


age = 20;
console.log(age);



let colors = ["赤","緑","青"];
console.log(colors[0]);

let person = {
    firstName: "Bob",
    lastName: "Smith",
    age: 25
};
console.log(person.firstName);

let greet = function(name) {
    return "こんにちわ、" + name + "さん！";
};
console.log(greet("Alice"));
let itemPrice1 = 20.99;
let itemPrice2 = 35.50;
let shoppingCost = 5.00;
let totalcost = itemPrice1 + itemPrice2 +shoppingCost;
console.log("Total Cost: $" + totalcost.toFixed(2));

let number1 = 300;
number1 += 200;

console.log(number1);


let number = 100;





if (number > 200) {
  console.log("numberは200より大きいです。");
} else if (number > 50) {
  console.log("numberは50より大きいです。");
} else {
  console.log("numberは50より小さいです。");
}


let gender = "男";

if (gender === "男" && age >= 20) {
    console.log("20歳以上の男性です");
}


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