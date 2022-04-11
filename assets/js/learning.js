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
foodContainerEl.insertAdjacentHTML("afterend", "Food Items");

foodContainerEl.insertAdjacentHTML("beforebegin", "<h1>beforeBegin</h1>");
foodContainerEl.insertAdjacentHTML("beforeend", "<h1>beforeEnd</h1>");

const li = document.createElement("li");
li.textContent = "New List";

foodContainerEl.insertAdjacentElement("afterbegin", li);

foodContainerEl.insertAdjacentText(
  "beforebegin",
  "Just Pure text without html tags"
);
