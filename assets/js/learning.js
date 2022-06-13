const creditBtnEl = document.querySelector("header span");

// (X) using HTML Attribute
creditBtnEl.setAttribute(
  "onclick",
  'alert("Authored by Anbuselvan - setAttribute")'
);

// (X) Drawbacks - Can't accept multiple actions
creditBtnEl.onclick = function () {
  alert("Authored by Anbuselvan");
};

function handleAuthorInfo() {
  alert("Authored by Trisha");
}

creditBtnEl.onclick = handleAuthorInfo();

// Listen for Events using `AddEventListeners`
// window.addEventListener()
// document.addEventListener()
// element.addEventListeners()

const handleCreditMsg = (event) => {
  alert("Javascript DOM - Anbuselvan");
  console.log(event.target);
  alert(event.type + " at " + event.currentTarget.innerHTML);
  alert("Coordinates: " + event.clientX + ":" + event.clientY);
};

creditBtnEl.addEventListener("click", handleCreditMsg);

document.addEventListener("contextmenu", handleCreditMsg);
