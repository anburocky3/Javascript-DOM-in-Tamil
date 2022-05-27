const inputName = document.querySelector(".input-name-container input");

// Setting the attribute
// Element.setAttribute("name", "fullName") // set the attribute with value
inputName.setAttribute("value", "Rajini");

// // Getting the attribute
const isAliveDOM = inputName.getAttribute("isAlive");
const placeDOM = inputName.getAttribute("place");

console.log(inputName.attributes); // List all attributes of that element
console.log(inputName.attributes[6].value); // attributes by index
console.log(inputName.attributes.place.value); // attributes by property name (DOT Notation)
console.log(inputName.attributes["interest"].value); // attributes by bracket notation
console.log(isAliveDOM, placeDOM);

// // Methods
console.log(inputName.hasAttribute("age")); // check for attribute existence
console.log(inputName.removeAttribute("isAlive")); // remove existing attribute
console.log(inputName.style); // returns CSSStyleDeclaration instead of values

// data-* attributes
console.log(inputName.dataset["interest"]); // get data-* values like this.
let workingBoolean = inputName.dataset.working == "true"; // converting string to boolean
console.log(typeof workingBoolean);

// Task: Display all attributes dynamically.
// for (let attr of inputName.attributes) {
//   console.log(`${attr.name} is ${attr.value}`);
// }
