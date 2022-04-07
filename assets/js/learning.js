// createElement
const main = document.getElementById("main");

function createAlertviaDOM(message) {
  const div = document.createElement("div");
  const textNode = document.createTextNode(message);
  // injecting textNode into div
  div.append(textNode);
  div.className = "alert";
  main.prepend(div);
}

createAlertviaDOM("Hello i was created by createElement");

// innerHTML
function createAlertviaTemplate(message) {
  const template = `
    <div class="alert">
    ${message}
    </div>
    `;

  main.innerHTML += template;
}

createAlertviaTemplate("Hello i was created by innerHTML");
