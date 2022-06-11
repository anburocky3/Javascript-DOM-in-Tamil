const formEl = document.querySelector("form#learning");
const inputTextEl = formEl.querySelector("input");
const inputCheckboxEl = formEl.querySelector("input[type='checkbox']");

formEl.addEventListener("submit", (event) => {
  event.preventDefault(); // Stops default behaviour
  console.log(inputTextEl.value, inputCheckboxEl.checked);
});
