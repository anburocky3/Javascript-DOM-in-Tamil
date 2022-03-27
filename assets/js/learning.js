// // createElement example:
// function createAlertviaDOM(message) {
//   const main = document.getElementById("main");

//   const div = document.createElement("div");

//   const textNode = document.createTextNode(message);
//   // You can use div.textContent as well as document.createTextNode, but don't use document.innerText

//   // injecting textNode into div
//   div.append(textNode);
//   div.className = "alert";
//   main.prepend(div);

//   // Challenge
//   // replace the <li class="food-item">${inputFood.value.toUpperCase()}</li> with createElement
// }

// createAlertviaDOM("Hey, i'm the new div");

// ---------------------------
// Modify alert content
/* 
These are setter/getter
- innerHTML
- innerText // Works with Elements
- textContent // Works with Nodes 
*/

let alertEl = document.querySelector(".alert .alert-message"); // https://jsben.ch/8tEs3 // Check benchmark here

// how to get existing contents
console.log(alertEl.innerText);
console.log(alertEl.innerHTML);
console.log(alertEl.textContent);

// how to set new/update contents
alertEl.innerText =
  "<div><strong>Successful!</strong> Hello, I've been modified!</div>";
alertEl.innerHTML = "<strong>Successful!</strong> Hello, I've been modified!";
alertEl.textContent = "<strong>Successful!</strong> Hello, I've been modified!";

console.log(alertEl);
