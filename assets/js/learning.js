function createAlertViaDOM(message) {
  const main = document.getElementById("main");

  // Creating div element
  const div = document.createElement("div");
  const textNode = document.createTextNode(message);

  // Assigning className
  div.className = "alert";

  // Append
  div.append(textNode);
  main.prepend(div);
}

createAlertViaDOM("Food is updated!");
