const inputName = document.querySelector(".input-name-container input");
const btnEl = document.querySelector(".input-name-container button");

// style="padding: 6px 10px;font-size:10px;background-color:royalblue;border:none;border-radius:5px;color:#FFF;"

// 1. setAttribute
btnEl.setAttribute(
  "style",
  "padding: 6px 10px;font-size:10px;background-color:royalblue;border:none;border-radius:5px;color:#FFF;"
);

// 2. Direct Property access
console.log(btnEl.style.cssText);
btnEl.style.padding = "6px 10px";
btnEl.style.fontSize = "10px";
btnEl.style.backgroundColor = "royalblue";
btnEl.style.border = "none";
btnEl.style.borderRadius = "5px";
btnEl.style.color = "#FFF";

// 3. cssText
btnEl.style.cssText =
  "padding: 6px 10px;font-size:10px;background-color:royalblue;border:none;border-radius:5px;color:#FFF;";
// btnEl.style.cssText += "font-weight:bold;";

// Getting the style
console.log(btnEl.style.backgroundColor);

// getComputedStyle()
console.log(window.getComputedStyle(btnEl, ":hover"));

// Task: Remove class styling defined in style.css and write the css using Javascript DOM.
// .input-name-container {
//   background: #FFF;
//   border-radius: 5px;
//   padding: 10px;
// }

// .input-name-container input {
//   padding: 2px 10px;
//   outline: none;
//   font-size: 12px;
// }
const inputContainerEl = document.querySelector(".input-name-container");
const inputEl = document.querySelector(".input-name-container input");
inputContainerEl.style.cssText =
  "background: #FFF;border-radius: 5px;padding: 10px;";
inputEl.style.cssText = "padding: 2px 10px;outline: none;font-size: 12px;";
