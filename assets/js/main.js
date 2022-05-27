let inputFood = document.getElementById("input-food");
let inputBtn = document.getElementById("input-btn");
let foodContainer = document.getElementById("food-container");

inputBtn.addEventListener("click", () => {
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
});

// remove Food items
function removeFoodItem(event) {
  const existingList = event.target.parentNode.parentNode;
  console.log("logging event", event.target.parentNode.parentNode);

  // new way
  existingList.classList.add("hide");
  // existingList.remove();
  // old way
  // existingList.parentNode.removeChild(existingList);
}
