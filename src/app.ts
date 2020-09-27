import { HasFormatter } from "./interfaces/HasFormatter";
import { Invoice } from "./classes/Invoice";
import { Payment } from "./classes/Payment";

// grab form element
const form = document.querySelector(".new-item-form") as HTMLFormElement;
// grab input fuelds
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// add events
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === "Invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  console.log(doc);
});
