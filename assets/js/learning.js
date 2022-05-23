const numbers = document.querySelector("ul:last-child li");

// Any DOM Nodes
console.log(numbers.nextSibling);
console.log(numbers.previousSibling);

// Any Element Nodes
console.log(numbers.nextElementSibling.innerText);
console.log(numbers.previousElementSibling.innerText);
