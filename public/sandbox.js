"use strict";
const inputs = document.querySelectorAll("input");
console.log(inputs);
inputs.forEach((input) => {
    console.log(input);
});
// Types
let character = "Mario Lazzari";
let age = 45;
let isBlackBelt = true;
character = "Mario";
console.log(character);
const circ = (diamenter) => {
    return diamenter * Math.PI;
};
//circ("ciao")
console.log(circ(10).toFixed(2));
// Arrays
let names = ["Mairo", "Mariarosa", "Maria"];
names.push("Roby");
//+names.push(4);
console.log(names);
let numbers = [10, 20, 30, 40];
numbers.push(50);
//numbers.push("ciao");
console.log(numbers);
let mixed = ["Mario", 45, "Mariarosa", 44];
mixed.push("Maria");
mixed.push(70);
mixed[0] = 45;
mixed[1] = "Mario";
console.log(mixed);
// Objects
let ninja = { name: "Mario", belt: "black", age: 45 };
ninja.age = 30;
//ninja.age="30"
//ninja.skils = ["test"];
// explicit types
let character2;
let age2;
let loggedIn;
//console.log(character2, age2, loggedIn);
// typed arrays
let ninjas = [];
ninjas.push("Mario");
// unioon types
let mixed2 = [];
mixed2.push("ciao");
mixed2.push(20);
console.log(mixed2);
let uid;
uid = 123;
uid = "123";
// objects
let ninja1;
ninja1 = { name: "Yoshi", age: 30 };
let ninja2;
ninja2 = { name: "Mario", age: 44 };
console.log(ninja1, ninja2);
// any type
let age3 = 25;
console.log(age3);
age3 = true;
console.log(age3);
let mixed3 = [];
mixed3.push("Mario");
mixed3.push(45);
mixed3.push(true);
console.log(mixed3);
let ninjaAny;
ninjaAny = { name: "Test", age: true };
console.log(ninjaAny);
// functions
let great;
great = () => {
    console.log("ciao ciao");
};
//great = 1
const add = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
add(1, 2);
//add(1,"a")
add(1, 2, "a");
const addDefault = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
addDefault(10, 20, 30);
const minus = (a, b) => {
    return a - b;
};
const diff = minus(10, 5);
console.log(diff);
const logDetails = (uid, item) => {
    console.log(`${item} has uid ${uid}`);
};
const great2 = (user) => {
    console.log(`${user.name} says hello.`);
};
// Function
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
greet("Mario", "ciao");
let calc;
calc = (num1, num2, action) => {
    if (action === "add") {
        return num1 + num2;
    }
    else {
        return num1 - num2;
    }
};
calc(1, 2, "add");
