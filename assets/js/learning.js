const foodItem = document.querySelector("#food-container li");

console.log(foodItem.parentNode);
console.log(foodItem.parentElement);

console.log(document.body.parentNode); // the <html> element
console.log(document.body.parentElement); // the <html> element

console.log(document.documentElement.parentNode); // the document node
console.log(document.documentElement.parentElement); // null

// closest
console.log(foodItem.closest("main"));
