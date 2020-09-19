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
