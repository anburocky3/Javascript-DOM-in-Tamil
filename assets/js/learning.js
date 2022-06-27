// const formEl = document.forms[0]; // by Index
const formEl = document.forms.feedback; // by name

// Get Elements from Form
// const fullNameEl = formEl.elements[0]; // or by index/bracket notation
const fullNameEl = formEl.elements.fullName; // or by index/bracket notation
const typeEl = formEl.elements.type;
const emailEl = formEl.elements.email;
const descEl = formEl.elements.description;
const termsEl = formEl.elements.terms;

// const fullNameEl = formEl.fullName; // you can also do this.

// Object Destructing
const { fullName, type, email, desc, terms } = formEl.elements;

console.log(fullName, type, email, desc, terms);
