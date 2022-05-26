const input = document.querySelector("#nameInput");

// Get
console.log(input.className);
input.className += " newClassName1 newClassName2";
console.log(input.className);

// To completely overwrite the className
// input.className = "className";
// console.log(input.className);

// Get class list using el.classList
console.log(input.classList);

// Loop over all classList
for (let cssClass of input.classList) {
  console.log(cssClass);
}

// Manipulate ClassList
input.classList.add("primary", "secondary", "three"); // add class to element
input.classList.replace("three", "third"); // replace old className with new className
input.classList.remove("primary", "nameInput"); // remove className by name
console.log(input.classList.contains("secondary")); // Check if className exist
input.classList.toggle("toggleClass"); // If the class list doesn’t contain the class name, the toggle() method adds it to the class list.

setTimeout(() => input.classList.toggle("toggleClass"), 2500);

// Task: Show div based on click (toggle)
const showBtn = document.getElementById("showBtn");
const divEl = document.querySelector(".nameInput-container");

showBtn.addEventListener("click", () => {
  if (divEl.style.display === "none") {
    divEl.style.display = "block";
    showBtn.textContent = "Hide";
  } else {
    divEl.style.display = "none";
    showBtn.textContent = "Show";
  }
});
