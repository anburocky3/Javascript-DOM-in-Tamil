const input = document.querySelector("#nameInput");

// You can get attributes of html element using object syntax. (DOT Notation)
console.log(input.type);
console.log(input.id);
console.log(input.name);
console.log(input.placeholder);

// Modify the input value.
input.value = "Trisha";
input.value = 3;
input.setAttribute("value", 3);
console.log(typeof input.value);
console.log(typeof parseInt(input.value, 10));

// However, the web browser only converts the standard attributes to the DOM object’s properties.
console.log(input.isAlive);

// Task: Create an input field of Age, which accepts number and change it via DOM using Javascript.
// input.value = 26;
// console.log(`My age is: ${26}`);
