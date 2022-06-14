// Mouse Events

// document.addEventListener("mousedown", (event) => {
//   console.log("Mousedown", event);
// });

// document.addEventListener("mouseup", (event) => {
//   console.log("MouseUp", event);
// });

// document.addEventListener("mouseenter", (event) => {
//   console.log("mouseenter");
// });

// document.addEventListener("mouseleave", (event) => {
//   console.log("mouseleave");
// });

// document.addEventListener("mousemove", (event) => {
//   console.log("mousemove");
// });

// document.addEventListener("mouseout", (event) => {
//   console.log("mouseout");
// });

// document.addEventListener("mouseover", (event) => {
//   console.log("mouseover");
// });

// document.addEventListener("click", (event) => {
//   console.log("click");
// });

// document.addEventListener("dblclick", (event) => {
//   console.log("dblclick");
// });

//  Task: Create an Mouse Tester app which should display respective message when that button is clicked.
document.addEventListener("mouseup", (event) => {
  switch (event.button) {
    case 1:
      alert("Left click");
      break;
    case 2:
      alert("Middle Click");
      break;
    case 3:
      alert("Right Click");
      break;
    default:
      alert(
        "Invalid or unknown click detected! - " + event.which + " is pressed!"
      );
      break;
  }
});
