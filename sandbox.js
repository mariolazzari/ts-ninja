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
