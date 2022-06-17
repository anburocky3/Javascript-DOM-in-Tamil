const formEl = document.forms.feedback;
const termsEl = formEl.elements.terms;

// 1. Properties
termsEl.checked = true; // set
termsEl.indeterminate = true; // either
console.log(termsEl.checked); // get

// 2. Events
termsEl.addEventListener("change", (e) => {
  console.log(e.target.checked);
});

// 3. Methods
termsEl.select();
