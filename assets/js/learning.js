const formEl = document.forms.feedback;
const nameEl = formEl.name;

// 1. Properties that are useful
console.log(nameEl);

// 1. Attributes
nameEl.value = "Anbu";
console.log(nameEl.value);
nameEl.disabled = true; // disables input field
nameEl.readOnly = true;

// 2. Events
nameEl.addEventListener("focus", () => console.log("focused"));
nameEl.addEventListener("blur", () => console.log("blur"));
nameEl.addEventListener("input", () => console.log("input"));
nameEl.addEventListener("change", () => console.log("change"));

// Other events
nameEl.addEventListener("cut", () => console.log("cut"));
nameEl.addEventListener("copy", () => console.log("copy"));
nameEl.addEventListener("paste", () => console.log("paste"));

// 3. Methods
nameEl.focus();
nameEl.blur();

const handleSubmit = (event) => {
  event.preventDefault(); // Prevent default behaviour

  const formData = new FormData(event.target);
};

formEl.addEventListener("submit", handleSubmit);

// Task: Create a One-way binding, when the name field changes, it should great like `Hello, {enteredInput} in real time.`
nameEl.addEventListener("input", (e) => {
  const nameGreetEl = document.querySelector("#nameGreet");
  nameGreetEl.innerText = `Hello ${e.target.value}, `;
});
