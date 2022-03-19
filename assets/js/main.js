// Object Example
let person = {
  name: "Anbuselvan", // properties
  place: "Chennai", // properties
  greetUser() {
    // method
    return `Hello my name is ${this.name} and i'm coming from ${this.place}.`;
  },
};

console.log(person.greetUser());

// Challenge: Dynamic simple program to get name & place automatically from the user.
const nameInput = prompt("What is your name?");
const placeInput = prompt("Where are you coming from?");

person.name = nameInput;
person.place = placeInput;

document.writeln("Hello " + person.name);

// Additionally you can also do this.
// document.body.innerHTML = `<h1>${person.greetUser()}</h1>`;
