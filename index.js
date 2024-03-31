console.log("この文字がコンソール表示されます。");
let age = 25;
const name = 'Alice';

console.log(name + 'is' + age + 'years old.');

age = 26;

console.log(name + 'will be' + age + 'next year.')


age = 30;
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