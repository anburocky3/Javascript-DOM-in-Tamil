// const formEl = document.querySelector("form");
const inputFullName = document.querySelector("#fullName input");

// Get Forms using this
const formEl = document.forms.feedback; // or this
// const formEl = document.forms[0]; // or this

// Get input Elements using document.elements (use by name)
// const fullName = document.forms.feedback.elements.name; // or by index/bracket notation
// const { name: fullName, email } = document.forms.feedback.elements; // or using Obj destructing
const fullName = document.forms.feedback.name;
console.log(fullName);

function handleInput(event) {
  // access the value
  console.log(event.target.value);

  // access the form for validation purpose (backreference)
  console.log(event);
}

fullName.addEventListener("input", handleInput);
// fullName.addEventListener("change", handleInput);
