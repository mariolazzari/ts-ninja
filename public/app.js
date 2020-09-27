"use strict";
// grab form element
var form = document.querySelector(".new-item-form");
// grab input fuelds
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
// add events
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, amount.valueAsNumber);
});
