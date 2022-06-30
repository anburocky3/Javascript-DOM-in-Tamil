let inputFood = document.getElementById("input-food");
let inputBtn = document.getElementById("input-btn");
let foodContainer = document.getElementById("food-container");
let noListEl = document.getElementById("no-list");
const foodListStatistics = document.getElementById("food-list-statistics");

const localStorageKey = "foodItems";

document.addEventListener("DOMContentLoaded", () => {
  // localStorage fetch, draw ui.
  const fetchedFoodItems = [
    ...JSON.parse(localStorage.getItem(localStorageKey)),
  ];

  fetchedFoodItems.forEach((item) => {
    let newFoodItemEl = document.createElement("li");

    let div = document.createElement("div"); //for list-item
    let divBtn = document.createElement("div");

    newFoodItemEl.append(div, divBtn);

    // assigning textContent & className to newFoodItemEl
    div.textContent = item.foodItem;
    newFoodItemEl.className = "food-item";

    divBtn.parentElement.setAttribute("onClick", "removeFoodItem(event)");
    divBtn.innerHTML = `<i class="fa fa-xmark"></i>`;
    newFoodItemEl.append(divBtn);

    // appending newly created element(newFoodItemEl) to foodContainer
    foodContainer.append(newFoodItemEl);
  });

  refreshUI();
});

const handleInputFood = () => {
  // creating li element
  let newFoodItemEl = document.createElement("li");

  let div = document.createElement("div"); //for list-item
  let divBtn = document.createElement("div");

  newFoodItemEl.append(div, divBtn);

  // assigning textContent & className to newFoodItemEl
  div.textContent = inputFood.value;
  newFoodItemEl.className = "food-item";

  divBtn.parentElement.setAttribute("onClick", "removeFoodItem(event)");
  divBtn.innerHTML = `<i class="fa fa-xmark"></i>`;
  newFoodItemEl.append(divBtn);

  // appending newly created element(newFoodItemEl) to foodContainer
  foodContainer.append(newFoodItemEl);

  // set localStorage
  localStorage.setItem(
    localStorageKey,
    JSON.stringify([
      ...JSON.parse(localStorage.getItem(localStorageKey) || "[]"),
      { foodItem: inputFood.value },
    ])
  );

  // resetting the inputFood value
  inputFood.value = "";

  refreshUI();
};

inputBtn.addEventListener("click", handleInputFood);

inputFood.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    handleInputFood();
  } else if (event.key === "KeyZ" && (event.ctrlKey || event.metaKey)) {
    // Undo Operations
    inputFood.value = "";
  }
});

// remove Food items
function removeFoodItem(event) {
  const existingList = event.target.parentNode.parentNode;
  existingList.remove();

  // remove from localStorage
  const fetchedFoodItems = [
    ...JSON.parse(localStorage.getItem(localStorageKey)),
  ];

  fetchedFoodItems.forEach((item) => {
    if (item.foodItem === existingList.innerText) {
      fetchedFoodItems.splice(fetchedFoodItems.indexOf(item), 1);
      // remove from localStorage
    }
  });

  localStorage.setItem(localStorageKey, JSON.stringify(fetchedFoodItems));

  refreshUI();
}

function refreshUI() {
  foodListStatistics.innerText = `You have ${foodContainer.children.length} lists`;

  // if (foodContainer.children.length > 0) {
  //   //  children exist, so don't show `no-list` div
  //   noListEl.hidden = true;
  // } else {
  //   // children not exist, show `no-list` div
  //   noListEl.hidden = false;
  // }

  // You can write better!
  foodContainer.children.length > 0
    ? ((noListEl.hidden = true), (foodListStatistics.hidden = false))
    : ((noListEl.hidden = false), (foodListStatistics.hidden = true));
}
