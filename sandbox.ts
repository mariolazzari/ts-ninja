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

const circ = (diamenter: number) => {
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
let character2: string;
let age2: number;
let loggedIn: boolean;
console.log(character2, age2, loggedIn);

// typed arrays
let ninjas: string[] = [];
ninjas.push("Mario");

// unioon types
let mixed2: (string | number)[] = [];
mixed2.push("ciao");
mixed2.push(20);
console.log(mixed2);

let uid: string | number;
uid = 123;
uid = "123";

// objects
let ninja1: object;
ninja1 = { name: "Yoshi", age: 30 };

let ninja2: { name: string; age: number };
ninja2 = { name: "Mario", age: 44 };
console.log(ninja1, ninja2);

// any type
let age3: any = 25;
console.log(age3);
age3 = true;
console.log(age3);

let mixed3: any[] = [];
mixed3.push("Mario");
mixed3.push(45);
mixed3.push(true);
console.log(mixed3);

let ninjaAny: { name: any; age: any };
ninjaAny = { name: "Test", age: true };

console.log(ninjaAny);
