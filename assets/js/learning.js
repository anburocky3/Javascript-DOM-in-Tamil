const btnEl = document.querySelector("#creditBtn");

console.log(btnEl);

// a click on <body> will generate errors,
// because attributes are always strings, function becomes a string
document.body.setAttribute("onclick", function () {
  alert(1);
});

// Drawback: Don't allows multiple events
btnEl.onclick = function (event) {
  // alert("I have been clicked");
  alert(event.type + " at " + event.currentTarget.innerHTML);
  alert("Coordinates: " + event.clientX + ":" + event.clientY);
};

// window.addEventListener("contextmenu", (e) => {
//   // e.preventDefault();
//   console.log(e);
// });

// const handleCreditEvent = function () {
//   alert("Javascript DOM by Anbuselvan.");
//   console.log(this);
// };

const handleCreditEvent = (event) => {
  console.log(this); // window object
  console.log(event.target); // event that is happening
};

btnEl.addEventListener("click", function (event) {
  alert("Javascript DOM by Anbuselvan.");
});

btnEl.addEventListener("contextmenu", handleCreditEvent); //
