const input = document.querySelector("#nameInput");
const btn = document.querySelector(".nameInput-container button");

// style="padding: 4px 10px; background: royalblue; color:#fff; border:none; border-radius: 5px; font-size:12px;"

// 1. Using setAttribute
btn.setAttribute("style", "color:white;background-color:royalblue");

// 2. Direct Property Access
btn.style.padding = "4px 10px";
btn.style.background = "royalblue";
btn.style.color = "#FFF";
btn.style.border = "none";
btn.style.borderRadius = "5px";
btn.style.fontSize = "12px";

// 3. cssText
btn.style.cssText = "padding: 4px 10px";
btn.style.cssText += "font-weight: bold"; // concatenate

// Get style information
console.log(btn.style.padding);

// getComputedStyle()
let style = window.getComputedStyle(btn, ":hover");
console.log(style);

// Task: Remove class styling defined in style.css and write the css using Javascript DOM.
// .nameInput-container {
//     background: #FFF;
//     padding: 10px
// }

// #nameInput {
//     padding: 2px 10px;
//     font-size: 12px;
//     outline: none
// }
