const formEl = document.forms.feedback;
const termsEl = formEl.elements.terms;

// Get Properties & Methods
// console.log(termsEl);

// 1. Attributes
// termsEl.checked = true;
// termsEl.indeterminate = true;
// console.log(termsEl.value);

// 2. Events
// termsEl.addEventListener("change", (event) => {
//   console.log(event.target.checked);
// });

// 3. Methods
// termsEl.select();
// termsEl.checked = true;

const handleSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(formEl);
};

formEl.addEventListener("submit", handleSubmit);

// Task: Show alert on click and display some contents, and if i click ok, it should check, if not it should not check.
termsEl.addEventListener("click", (e) => {
  if (e.target.checked) {
    let confirmation = confirm("Here are some terms, do you accept?");

    if (!confirmation) {
      e.preventDefault();
    }
  }
});
