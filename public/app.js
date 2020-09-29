import { Invoice } from "./classes/Invoice";
import { Payment } from "./classes/Payment";
import { ListTemplate } from "./classes/ListTemplate";
// grab form element
const form = document.querySelector(".new-item-form");
// grab input fuelds
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
// add events
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "Invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
// generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let doc1 = addUID({ name: "Yoshi", age: 40 });
console.log(doc1.name);
const doc3 = {
    uid: 1,
    name: "Mario",
    data: "ciao",
};
console.log(doc3);
const doc4 = {
    uid: 1,
    name: "Mario",
    data: ["ciao"],
};
console.log(doc4);
