const foodContainerEl = document.querySelector("#food-container");

const sambarList = document.querySelector("#food-container :first-child");

const newLi = document.createElement("li");
newLi.textContent = "Paruppu Sambar";
newLi.className = "food-item";

// new way (replaceWith)
sambarList.replaceWith(newLi);

// old way (replaceChild)
sambarList.parentNode.replaceChild(newLi, sambarList);

/* 
 replaceChildren
*/

// create new list
const maagi = document.createElement("li");
maagi.textContent = "Maagi";
maagi.className = "food-item";

const eggRice = document.createElement("li");
eggRice.textContent = "Egg rice";
eggRice.className = "food-item";

foodContainerEl.replaceChildren(maagi, eggRice);
