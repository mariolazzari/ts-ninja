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
  console.log(type.value, amount.valueAsNumber);
});
