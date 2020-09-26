"use strict";
var inputs = document.querySelectorAll("input");
console.log(inputs);
inputs.forEach(function (input) {
    console.log(input);
});
// Types
var character = "Mario Lazzari";
var age = 45;
var isBlackBelt = true;
character = "Mario";
console.log(character);
var circ = function (diamenter) {
    return diamenter * Math.PI;
};
//circ("ciao")
console.log(circ(10).toFixed(2));
// Arrays
var names = ["Mairo", "Mariarosa", "Maria"];
names.push("Roby");
//+names.push(4);
console.log(names);
var numbers = [10, 20, 30, 40];
numbers.push(50);
//numbers.push("ciao");
console.log(numbers);
var mixed = ["Mario", 45, "Mariarosa", 44];
mixed.push("Maria");
mixed.push(70);
mixed[0] = 45;
mixed[1] = "Mario";
console.log(mixed);
// Objects
var ninja = { name: "Mario", belt: "black", age: 45 };
ninja.age = 30;
//ninja.age="30"
//ninja.skils = ["test"];
// explicit types
var character2;
var age2;
var loggedIn;
//console.log(character2, age2, loggedIn);
// typed arrays
var ninjas = [];
ninjas.push("Mario");
// unioon types
var mixed2 = [];
mixed2.push("ciao");
mixed2.push(20);
console.log(mixed2);
var uid;
uid = 123;
uid = "123";
// objects
var ninja1;
ninja1 = { name: "Yoshi", age: 30 };
var ninja2;
ninja2 = { name: "Mario", age: 44 };
console.log(ninja1, ninja2);
// any type
var age3 = 25;
console.log(age3);
age3 = true;
console.log(age3);
var mixed3 = [];
mixed3.push("Mario");
mixed3.push(45);
mixed3.push(true);
console.log(mixed3);
var ninjaAny;
ninjaAny = { name: "Test", age: true };
console.log(ninjaAny);
// functions
var great;
great = function () {
    console.log("ciao ciao");
};
//great = 1
var add = function (a, b, c) {
    console.log(a + b);
    console.log(c);
};
add(1, 2);
//add(1,"a")
add(1, 2, "a");
var addDefault = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
addDefault(10, 20, 30);
var minus = function (a, b) {
    return a - b;
};
var diff = minus(10, 5);
console.log(diff);
var logDetails = function (uid, item) {
    console.log(item + " has uid " + uid);
};
var great2 = function (user) {
    console.log(user.name + " says hello.");
};
// Function
var greet;
greet = function (name, greeting) {
    console.log(name + " says " + greeting);
};
greet("Mario", "ciao");
var calc;
calc = function (num1, num2, action) {
    if (action === "add") {
        return num1 + num2;
    }
    else {
        return num1 - num2;
    }
};
calc(1, 2, "add");
