const tableEl = document.querySelector("table");

let selectedId;

tableEl.addEventListener("click", (event) => {
  const target = event.target;
  const closestTr = target.closest("tr");

  if (target.tagName === "TH") return; // Ignoring TH element.

  if (selectedId != undefined) {
    selectedId.classList.remove("active"); // removing class
  }

  selectedId = closestTr;

  closestTr.classList.add("active");

  alert(`Hello ${closestTr.children[0].textContent}`);
});

// Task: Show a donate page based on Toggle
document.addEventListener("click", (event) => {
  const id = event.target.dataset.toggleId;

  if (!id) return; // ignore all

  const el = document.getElementById(id);

  el.hidden = !el.hidden;
});

const formEl = document.querySelector("#donate-form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const donateAmount = event.target.querySelector("input").value;

  alert(`Thank you for donating ₹${donateAmount}.`);
});
