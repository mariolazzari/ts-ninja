import { HasFormatter } from "./interfaces/HasFormatter";
import { Invoice } from "./classes/Invoice";
import { Payment } from "./classes/Payment";
import { ListTemplate } from "./classes/ListTemplate";

// grab form element
const form = document.querySelector(".new-item-form") as HTMLFormElement;
// grab input fuelds
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance
const ul = document.querySelector("ul") as HTMLUListElement;
const list = new ListTemplate(ul);

// add events
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === "Invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  list.render(doc, type.value, "end");
});
