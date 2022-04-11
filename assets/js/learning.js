const foodContainerEl = document.getElementById("food-container");

// normal way
console.time("normal way");
for (let i = 1; i <= 1000; i++) {
  const li = document.createElement("li");
  li.textContent = `Food Item ${i}`;
  li.className = "food-item";
  foodContainerEl.append(li);
}
console.timeEnd("normal way");

// documentFragment() way
console.time("documentFragment way");
let fragment = document.createDocumentFragment();
for (let i = 1; i <= 1000; i++) {
  const li = document.createElement("li");
  li.textContent = `Food Item: ${i}`;
  li.className = "food-item";
  fragment.append(li);
}
foodContainerEl.append(fragment);
console.timeEnd("documentFragment way");

// Challenge: Create your favourite foods using createElement & documentFragment
const favouriteFood = [
  "Chicken Biriyani",
  "Mutton Biriyani",
  "Fish Biriyani",
  "Prawn Biriyani",
];

const listFragment = document.createDocumentFragment();
favouriteFood.forEach((favFood) => {
  let li = document.createElement("li");
  li.textContent = favFood;
  li.className = "food-item";
  listFragment.append(li);
});

foodContainerEl.append(listFragment);
