const inputName = document.querySelector(".input-name-container input");

// Get
console.log(inputName.className);

// To overwrite className
inputName.setAttribute("class", "newClassName");
inputName.className += " newClassName2 newClassName3 newClassName4";

// console.log(inputName.classList);
for (let cssClass of inputName.classList) {
  console.log(cssClass);
}

// Manipulations
console.log(inputName.classList.length);
inputName.classList.add("5class");
console.log(inputName.classList.contains("class-invalid"));
console.log(inputName.classList.replace("newClassName4", "newClassName44"));
inputName.classList.remove("newClassName2");
console.log(inputName.className);

setTimeout(() => {
  inputName.classList.toggle("5class");
}, 5000);

// console.log(inputName.classList);

// Task: Show div based on click (toggle)
const inputContainer = document.querySelector(".input-name-container");
const showBtnEl = document.querySelector("#showBtn");

showBtnEl.addEventListener("click", () => {
  if (inputContainer.style.display === "none") {
    showBtnEl.innerText = "Hide Div";
    showBtnEl.style.backgroundColor = "gray";
    inputContainer.style.display = "block";
  } else {
    inputContainer.style.display = "none";
    showBtnEl.style.backgroundColor = "royalblue";
    showBtnEl.innerText = "Show Div";
  }
});
