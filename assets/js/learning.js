// Keyboard Events
// document.addEventListener("keydown", (event) => {
//   console.log("keydown", event);
// });

document.addEventListener("keyup", (event) => {
  // console.log(`keyup: key: ${event.key}, code: ${event.code}`);
  console.log(event);
});

// Task: Build a simple typing-test screen.
// document.addEventListener("keyup", (event) => {
//   switch (event.key) {
//     case "ArrowUp":
//       alert("You have pressed ArrowUp Key");
//       break;
//     case "ArrowDown":
//       alert("You have pressed ArrowDown Key");
//       break;
//     case "ArrowLeft":
//       alert("You have pressed ArrowLeft Key");
//       break;
//     case "ArrowRight":
//       alert("You have pressed ArrowRight Key");
//       break;
//     default:
//       alert("Unknown key detected");
//       break;
//   }
// });
