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

  let values: [string, string, number] = [
    tofrom.value,
    details.value,
    amount.valueAsNumber,
  ];
  let doc: HasFormatter;
  if (type.value === "Invoice") {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }

  list.render(doc, type.value, "end");
});

// generics
const addUID = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let doc1 = addUID({ name: "Yoshi", age: 40 });
console.log(doc1.name);

// generics with interface
interface Resource<T> {
  uid: number;
  name: string;
  data: T;
}

const doc3: Resource<string> = {
  uid: 1,
  name: "Mario",
  data: "ciao",
};
console.log(doc3);

const doc4: Resource<string[]> = {
  uid: 1,
  name: "Mario",
  data: ["ciao"],
};
console.log(doc4);

// Enums
enum ResourceType {
  BOOK,
  AUTHOR,
}

interface Resource2<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

const doc5: Resource2<string[]> = {
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
