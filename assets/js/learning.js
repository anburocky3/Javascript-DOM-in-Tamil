const btnEl = document.querySelector("#creditBtn");
const formEl = document.querySelector("form");
const divEl = document.querySelector("form div");
const pEl = document.querySelector("form p");

pEl.addEventListener("click", () => {
  alert("p");
});

divEl.addEventListener("click", (event) => {
  alert("div");

  // Stopping Bubbling
  event.stopPropagation();

  // Removes all event listeners of that element
  event.stopImmediatePropagation();
});

formEl.addEventListener("click", () => {
  alert("Form");
});

formEl.addEventListener("click", (event) => {
  event.target.style.color = "#FFF";

  // chrome needs some time to paint yellow
  setTimeout(() => {
    alert("target = " + event.target.tagName + ", this= " + formEl.tagName);
    event.target.style.color = "";
  }, 0);
});

divEl.addEventListener("click", (event) => {
  console.log("Another div click action", event);
});

// To catch an event on the capturing phase
formEl.addEventListener("click", () => {}, { capture: true }); // or just "true", by default it is false

// Catch both capturing and bubblnig
for (let elem of document.querySelectorAll("form, form *")) {
  elem.addEventListener(
    "click",
    (e) => alert(`Capturing: ${elem.tagName}`),
    true
  );
  elem.addEventListener("click", (e) => alert(`Bubbling: ${elem.tagName}`));
}
