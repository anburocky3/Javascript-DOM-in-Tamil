let inputFood = document.getElementById("input-food");
let inputBtn = document.getElementById("input-btn");
let foodContainer = document.getElementById("food-container");

inputBtn.addEventListener("click", () => {
  // creating li element
  let newFoodItemEl = document.createElement("li");

  // creating food items comment
  let foodItemElComment = document.createComment("Food items");

  // appending comment
  foodContainer.append(foodItemElComment);

  // assigning textContent & className to newFoodItemEl
  newFoodItemEl.textContent = inputFood.value;
  newFoodItemEl.className = "food-item";

  // appending newly created element(newFoodItemEl) to foodContainer
  foodContainer.append(newFoodItemEl);

  // resetting the inputFood value
  inputFood.value = "";

  // or do it via templates here
  //   foodContainer.innerHTML += `<li class="food-item">${inputFood.value.toUpperCase()}</li>`;
});

// QuerySelectors
const foodItemEl = document.querySelector("li");
