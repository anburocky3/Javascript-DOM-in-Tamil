const input = document.querySelector("#nameInput");

// Setting
// element.setAttribute("name", value) // set the value for the attribute
input.setAttribute("value", "Anbu");

// Getting
const isAliveDOM = input.getAttribute("is-alive");
const placeDOM = input.getAttribute("place");

// Get All attributes (Live Collections)
console.log(input.attributes.value); // get attribute using property name
console.log(input.attributes[5], input.attributes[5].value); // get attribute using index
console.log(input.attributes["is-alive"]); // get attribute using index
console.log(isAliveDOM, placeDOM);

// Methods
console.log(input.hasAttribute("age")); // checks for existence.
console.log(input.removeAttribute("is-alive")); // removes the attribute.
console.log(input.style); // returns CSSStyleDeclaration instead of values.

// data-* attributes
console.log(input.dataset.spokenLang); // get data-* values like this.
console.log(input.dataset.working === "true"); // converting string to boolean

// Task: Display all attributes dynamically.
// for (let attr of input.attributes) {
//   console.log(`${attr.name} = ${attr.value}`);
// }
