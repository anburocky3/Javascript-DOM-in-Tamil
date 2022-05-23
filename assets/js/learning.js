const foodContainerEl = document.querySelector("#food-container");

const list = document.querySelectorAll("li");

// querySelectorAll: NodeList
console.log(list, list.length);

// .children: HTMLCollections
console.log(foodContainerEl.children, foodContainerEl.children.length);

// childNodes: NodeList
console.log(foodContainerEl.childNodes);

// first/firstElementChild
console.log(foodContainerEl.firstChild);
console.log(foodContainerEl.firstElementChild.innerText);

// last/lastElementChild
console.log(foodContainerEl.lastChild);
console.log(foodContainerEl.lastElementChild.innerText);

const header = document.querySelector("header");

// if you access the child which doesn't exist, it will return null.
console.log(header.firstElementChild);
