const btnEl = document.querySelector("#creditBtn");

// const handleCreditEvent = (event) => {
//   console.log("Some click event is happening", event.target);

//   // Remove the Event Listener
//   setTimeout(() => {
//     btnEl.removeEventListener("click", handleCreditEvent);
//   }, 5000);
// };

// // Adding the Event Listener
// btnEl.addEventListener("click", handleCreditEvent);

btnEl.addEventListener(
  "dblclick",
  () => {
    console.log("Double-clicked button");
  },
  { once: true }
);

// Task: Create a secret button which displays secret key only once.
