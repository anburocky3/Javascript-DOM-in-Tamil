const numbers = document.querySelector("ul:last-child li");

console.log(numbers.innerText);

//  Any Node : Node
console.log(numbers.nextSibling);
console.log(numbers.previousSibling);

// Any Element Nodes : Element
console.log(numbers.nextElementSibling.innerText);
console.log(numbers.previousElementSibling.innerText);
