let inputFood = document.getElementById("input-food");
let inputBtn = document.getElementById("input-btn");
let foodContainer = document.getElementById("food-container");

inputBtn.addEventListener("click", () => {
  foodContainer.innerHTML += `<li class="food-item">${inputFood.value.toUpperCase()}</li>`;
});

// getElementsByClassName
const foodItems = foodContainer.getElementsByClassName("food-item");

let allFoods = [].map.call(foodItems, (food) => food.textContent);

console.log(allFoods);

// getElementsByTagName;
const foodItemsEl = document.getElementsByTagName("li");

console.log(`I have ${foodItemsEl.length} items`);

// QuerySelectors
const result = document.querySelector("li");

const resultList = document.querySelectorAll("li");

console.log(result[0].innerText);
