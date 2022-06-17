const formEl = document.forms.feedback;
const categoryEl = formEl.category;
const inputCategories = document.querySelector(".input-categories");

const allCategories = [...categoryEl];

// 1. Properties
// allCategories.forEach((category) => {
//   console.log(category.value);
//   console.log(category.checked);
// });

// 2. Events
inputCategories.addEventListener("change", (e) => {
  const checked = allCategories.find((category) => category.checked);
  console.log(checked);
  console.log("Selected: ", e.target.value);
});

// 3. Methods
allCategories[2].select();
allCategories[2].checked = true;

// Task: If contribution radio button clicked, then show an alert message of "Thank you for contributing." after 1 Sec.
inputCategories.addEventListener("change", (e) => {
  const checked = allCategories.find((category) => category.checked);

  if (checked.value === "contribution") {
    setTimeout(() => {
      alert("Thank you for contributing.");
    }, 1000);
  }
});
