// createElement example:
function createAlertviaDOM(message) {
  const main = document.getElementById("main");

  const div = document.createElement("div");

  const textNode = document.createTextNode(message);
  // You can use div.textContent as well as document.createTextNode, but don't use document.innerText

  // injecting textNode into div
  div.append(textNode);
  div.className = "alert";
  main.prepend(div);

  // Challenge
  // replace the <li class="food-item">${inputFood.value.toUpperCase()}</li> with createElement
}

createAlertviaDOM("Hey, i'm the new div");
