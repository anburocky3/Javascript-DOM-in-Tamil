const formEl = document.forms.feedback;
const country = formEl.elements.country;

// 1. Properties
country.value = "SL"; // set
console.log(country.value); // get

// 2. Selected Index
console.log(country[3]);

// 3. Selected DOM Element
console.log(country.options[country.selectedIndex]);
console.log(country.options.selectedIndex);

// 4. Events
country.addEventListener("change", (event) => {
  console.dir(event.target.options[event.target.selectedIndex]); // using event.target
  console.log(
    `Getting ${country.options[country.selectedIndex].value} details`
  ); // get option value
  console.log(`Getting ${country.options[country.selectedIndex].text} details`); // get option text value
});

// 5. Adding new <option>
// 5.1. Using DOM methods
const option = document.createElement("option");
option.value = "ZAF";
option.text = "South Africa";

// 5.2. Using the Option Constructor
const option2 = new Option("Africa South", "FAZ");

// Insert into select tag.
country.add(option, 2);
country.add(option2, 2);
country.remove(0); // removes an option specified by the index from a <select>
console.log(country);

// or
