const formEl = document.querySelector("form");
const divEl = document.querySelector("form div");
const pEl = document.querySelector("form p");

formEl.addEventListener("click", (event) => {
  alert("Form");
  console.log(`Target: ${event.target.tagName}, this: ${formEl.tagName}`);
});

divEl.addEventListener("click", (event) => {
  alert("Div");

  // // Stop Bubbling
  event.stopPropagation();

  // Removes all active event listeners
  event.stopImmediatePropagation();
});

pEl.addEventListener("click", () => {
  alert("P");
});

// To catch an event on the capturing phase
formEl.addEventListener("click", () => {}, { capture: true }); // by default false,

// Task: Catch the Capturing & Bubbling Phrase
for (let elem of document.querySelectorAll("form, form *")) {
  // Capturing Phase
  elem.addEventListener(
    "click",
    () => {
      console.log(`Capturing Phase: ${elem.tagName}`);
    },
    { capture: true }
  );

  // Bubbling Phase
  elem.addEventListener("click", () => {
    console.log(`Bubbling Phase: ${elem.tagName}`);
  });
}
