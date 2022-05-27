// Task: Show div based on click (toggle)
const inputContainer = document.querySelector(".input-name-container");
const showBtnEl = document.querySelector("#showBtn");

showBtnEl.addEventListener("click", () => {
  if (inputContainer.classList.contains("hide")) {
    showBtnEl.innerText = "Hide Div";
    showBtnEl.style.backgroundColor = "gray";
    // inputContainer.style.display = "block";
    inputContainer.classList.remove("hide");
  } else {
    // inputContainer.style.display = "none";
    inputContainer.classList.add("hide");
    showBtnEl.style.backgroundColor = "royalblue";
    showBtnEl.innerText = "Show Div";
  }
});
