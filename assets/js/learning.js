const foodContainerEl = document.querySelectorAll("#food-container li");

const favouriteFood = [
  "Chicken Biriyani",
  "Mutton Biriyani",
  "Fish Biriyani",
  "Prawn Biriyani",
];

// How to iterate?

// for loop
for (let i = 0; i < favouriteFood.length; i++) {
  console.log(favouriteFood[i]);
}

// for..of
for (const item of favouriteFood) {
  console.log(item);
}

// convert existing list into javascript array?
const foodItems = [];

for (let i = 0; i < foodContainerEl.length; i++) {
  //   console.log(foodContainerEl[i].innerText);
  foodItems.push(foodContainerEl[i].innerText);
}

console.log(foodItems);

// spread operator
foodContainerEl.forEach((food) => console.log("NodeLists", food));
[...foodContainerEl].forEach((food) => console.log("Spread", food));

// Array.from
Array.from(foodContainerEl).forEach((food) => console.log("Array.From", food));
