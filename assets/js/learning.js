const foodContainerEl = document.getElementById("food-container");

const li = document.createElement("li");
li.textContent = "Biriyani";
li.className = "food-item";

// appending
foodContainerEl.append(li); //append()
foodContainerEl.prepend(li); //prepend()
foodContainerEl.before(li); //before()
foodContainerEl.after(li); //after()

// before: Old way, use before()
foodContainerEl.parentNode.insertBefore(li, foodContainerEl);

// after: Old way, use after()
foodContainerEl.parentNode.insertBefore(li, foodContainerEl.nextSibling);
