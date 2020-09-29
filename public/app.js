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
    let values = [
        tofrom.value,
        details.value,
        amount.valueAsNumber,
    ];
    let doc;
    if (type.value === "Invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
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
// Enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
})(ResourceType || (ResourceType = {}));
const doc5 = {
    uid: 1,
    resourceType: ResourceType.AUTHOR,
    data: ["test"],
};
console.log(doc5);
// Tuples
let arr = ["Mario", 45, true];
arr[0] = 123;
/*
let tup: [string, number, boolean];
tup[0] = "test";
tup[1] = 1;
tup[2] = true;
console.log(tup);
*/
