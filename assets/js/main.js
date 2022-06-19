let inputFood = document.getElementById("input-food");
let inputBtn = document.getElementById("input-btn");
let foodContainer = document.getElementById("food-container");
let noListDivEl = document.querySelector("#no-list");
let foodListStatisticsEl = document.querySelector("#food-list-statistics");

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

  // resetting the inputFood value
  inputFood.value = "";

  refreshUIState();
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

  refreshUIState();
}

function refreshUIState() {
  // if (foodContainer.children.length > 0) {
  //   noListDivEl.hidden = true;
  // } else {
  //   noListDivEl.hidden = false;
  // }

  foodListStatisticsEl.innerText = `You have ${foodContainer.children.length} lists`;

  // You can write it better
  foodContainer.children.length > 0
    ? ((noListDivEl.hidden = true), (foodListStatisticsEl.hidden = false))
    : ((noListDivEl.hidden = false), (foodListStatisticsEl.hidden = true));
}
