const foodContainerEl = document.querySelector("#food-container li");

console.log(foodContainerEl.parentNode); // Finding parentNode
console.log(foodContainerEl.parentElement.parentElement); // Finding parentElement

console.log(document.body.parentNode); // returns <html>
console.log(document.body.parentElement); // returns <html>

console.dir(document.documentElement.parentNode); // the document node
console.dir(document.documentElement.parentElement); // null

console.log(document.nodeType); // checking nodeType

// closest
console.log(foodContainerEl.closest("main")); // match closest occurrence.
