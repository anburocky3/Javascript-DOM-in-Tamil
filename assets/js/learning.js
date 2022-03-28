// 1. Creating elements using createElement()
function createAlertviaDOM(message) {
  const main = document.getElementById("main");
  const div = document.createElement("div");
  const textNode = document.createTextNode(message);
  // injecting textNode into div
  div.append(textNode);
  div.className = "alert";
  main.prepend(div);
}

createAlertviaDOM("Hey, i'm the new div");

// 1. creating element using template & innerHTML
function createAlertViaTemplate(message) {
  const div = `
    <div class="alert">
      ${message}
    </div>
  `;

  return div;
}

const main = document.getElementById("main");

const onFoodItemsAdded = createAlertViaTemplate(
  "Food items have been added Successfully!"
);

main.innerHTML += onFoodItemsAdded;
