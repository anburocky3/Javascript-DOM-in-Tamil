const formEl = document.forms.feedback;
const categoryEl = formEl.elements.type;

const inputCategory = document.querySelector("#input-categories");

const allCategories = [...categoryEl];

// Get Properties & Methods
console.log(categoryEl);
console.log(allCategories);

// 1. Attributes
allCategories.forEach((category) => {
  console.log(category.value);
  console.log(category.checked);
});

// 2. Events
inputCategory.addEventListener("change", (event) => {
  const checked = allCategories.find((category) => {
    return category.checked;
  });
  console.log("Selected: ", checked.value);
  console.log("Simple: ", event.target.value);
});

// 3. Methods
allCategories[1].select();
allCategories[2].checked = true;

const handleSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(formEl);
};

formEl.addEventListener("submit", handleSubmit);

// Task:  If contribution radio button clicked, then show an alert message of "Thank you for contributing." after 1 Sec.

inputCategory.addEventListener("change", (event) => {
  const checked = allCategories.find((category) => category.checked);
  // const checked = event.target;

  if (checked.value === "contribution") {
    setTimeout(() => {
      alert("Thank you for contributing!");
    }, 1000);
  }
});
