const foodContainerEl = document.querySelector("#food-container");

// querySelectorAll: NodeList
const queryChildren = foodContainerEl.querySelectorAll("li");
console.log(queryChildren, queryChildren.length);

// .children: HTMLCollections
console.log(foodContainerEl.children);

// .childNodes: NodeList
console.log(foodContainerEl.childNodes);

// first/last
console.log("firstChild", foodContainerEl.firstChild);
console.log(foodContainerEl.firstElementChild);

console.log("lastChild", foodContainerEl.lastChild);
console.log(foodContainerEl.lastElementChild);
