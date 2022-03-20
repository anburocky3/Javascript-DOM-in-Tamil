let inputFood = document.getElementById("input-food");
let inputBtn = document.getElementById("input-btn");
let response = document.getElementById("response");

// console.log(inputFood, inputBtn);

inputBtn.addEventListener("click", () => {
  response.innerText = inputFood.value;
});
