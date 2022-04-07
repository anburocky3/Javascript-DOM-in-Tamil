// function createAlertViaDOM(message) {
//   const main = document.getElementById("main");

//   // Creating div element
//   const div = document.createElement("div");
//   const textNode = document.createTextNode(message);

//   // Assigning className
//   div.className = "alert";

//   // Append
//   div.append(textNode);
//   main.prepend(div);
// }

// createAlertViaDOM("Food is updated!");

// ---------------------------
// Modify alert content
/* 
These are setter/getter
- innerHTML
- innerText // Works with Elements
- textContent // Works with Nodes 
*/

const alertEl = document.querySelector(".alert .alert-message"); // https://jsben.ch/8tEs3 // Check benchmark here

// how to get existing contents
console.log(alertEl.innerText);
console.log(alertEl.innerHTML);
console.log(alertEl.textContent);

// setting
alertEl.innerText =
  "<strong>✅ Successful!</strong> Hello, i've been modified!";
alertEl.innerHTML =
  "<strong>✅ Successful!</strong> Hello, i've been modified!";
alertEl.textContent =
  "<strong>✅ Successful!</strong> Hello, i've been modified!";
