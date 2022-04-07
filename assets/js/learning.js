const foodContainerEl = document.querySelector("#food-container");

// How it will get inserted?
// <!-- beforebegin -->
// <p>
//   <!-- afterbegin -->
//   foo
//   <!-- beforeend -->
// </p>
// <!-- afterend -->

foodContainerEl.insertAdjacentHTML("afterbegin", "<li>Food Items</li>");
foodContainerEl.insertAdjacentHTML("afterend", "<li>Hello there</li>");

foodContainerEl.insertAdjacentHTML("beforebegin", "<li>Hello there</li>");
foodContainerEl.insertAdjacentHTML("beforeend", "<li>Hello there</li>");

const li = document.createElement("li");
li.textContent = "New List";

foodContainerEl.insertAdjacentElement("afterbegin", li);

foodContainerEl.insertAdjacentText(
  "beforebegin",
  "Just Pure text without html tags"
);
