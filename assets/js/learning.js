const foodContainerEl = document.querySelector("#food-container");
const duplicateEl = document.getElementById("duplicate");
const resyncBtn = document.getElementById("resyncBtn");

// cloneNode(false) only clones the top element
const foodDuplicate = foodContainerEl.cloneNode();

resyncBtn.addEventListener("click", () => {
  duplicateEl.innerHTML = "";

  // cloneNode(true) clones all elements and subtrees.
  const foodDuplicate = foodContainerEl.cloneNode(true);

  duplicateEl.append(foodDuplicate);

  console.log(foodDuplicate.innerHTML);
  console.log(foodDuplicate.nodeName);
});
