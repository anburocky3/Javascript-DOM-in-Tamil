const formEl = document.forms.feedback;
const countryEl = formEl.elements.country;

console.log(countryEl);

// 1. Properties
countryEl.value = "IND"; // set
console.log(countryEl.value); // get

// 2. Selected Index
countryEl.selectedIndex = 2;
console.log(countryEl[2].value);

// 3. Selected DOM Element
console.log(countryEl.options[countryEl.selectedIndex].value);
console.log(countryEl.options.selectedIndex);

// 4. Events
countryEl.addEventListener("change", (event) => {
  console.log(event.target.options[event.target.selectedIndex]);
  console.log(
    `Selected value: ${event.target.options[event.target.selectedIndex].value}`
  ); // get value
  console.log(
    `Selected Text: ${event.target.options[event.target.selectedIndex].text}`
  ); // get text
});

// 5. Options
// 5.1 Using DOM methods
const optionEl = document.createElement("option");
optionEl.value = "FAZ";
optionEl.text = "South Africa";

// 5.2. Using the Option Constructor
const option2 = new Option("Indonesia", "IDN");

// Adding option to select tag
countryEl.add(optionEl, 2);
countryEl.add(option2, 10);
countryEl.remove(4); // removes 4th index

const handleSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(formEl);
};

formEl.addEventListener("submit", handleSubmit);
