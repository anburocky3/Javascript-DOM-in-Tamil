const tableEl = document.querySelector("table#authors");

let selectedId;

function handleTableClick(event) {
  const target = event.target;
  const closestTarget = target.closest("tr");

  if (target.tagName == "TH") return; // Ignoring TH tag

  if (selectedId != undefined) {
    selectedId.classList.remove("active");
  }

  selectedId = closestTarget;

  closestTarget.classList.add("active"); // applying .active class

  console.log(`Hello ${target.textContent}`);
  // console.log(target.closest("tr").children[0].textContent); // Better approach
}

tableEl.addEventListener("click", handleTableClick);

// Task: Show a Donate Form on Toggle
document.addEventListener("click", function (event) {
  let id = event.target.dataset.toggleId;

  if (!id) return;

  let el = document.getElementById(id);

  el.hidden = !el.hidden;
});

// handling the form
const formEl = document.querySelector("form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const donatedAmount = event.target.querySelector("input").value;
  alert(`Thank you for donating ₹${donatedAmount}.`);
});
