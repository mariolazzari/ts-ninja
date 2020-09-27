import { Invoice } from "./classes/Invoice";
import { Payment } from "./classes/Payment";
// grab form element
const form = document.querySelector(".new-item-form");
// grab input fuelds
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
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
    console.log(doc);
});
