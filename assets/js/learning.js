const formEl = document.forms.feedback;
const nameEl = formEl.elements.fullName;

// Get Properties & Methods
console.log(nameEl);

// 1. Attributes
nameEl.value = "Anbu";
nameEl.disabled = true;
nameEl.readOnly = true;

// 2. Events
nameEl.addEventListener("focus", () => console.log("focused!"));
nameEl.addEventListener("blur", () => console.log("blur"));
nameEl.addEventListener("input", (e) =>
  console.log(`You have entered: ${e.target.value}`)
);
nameEl.addEventListener("change", (e) =>
  console.log(`Changed value: ${e.target.value}`)
);

// Other events
nameEl.addEventListener("cut", () => console.log("cut"));
nameEl.addEventListener("copy", () => {
  alert("You can't copy the values");
});
nameEl.addEventListener("paste", () => console.log("paste"));

// 3. Methods
nameEl.focus();
nameEl.blur();

const handleSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(formEl);
};

formEl.addEventListener("submit", handleSubmit);

// Task: Task: Create a One-way binding, when the name field changes, it should great like `Hello, {enteredInput} in real time.`

nameEl.addEventListener("change", (event) => {
  document.querySelector(
    "#nameGreet"
  ).innerText = `Hello ${event.target.value}, `;
});
