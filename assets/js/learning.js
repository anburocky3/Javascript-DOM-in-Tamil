const creditBtnEl = document.querySelector("header span");

const handleCreditMsg = (event) => {
  // alert("Javascript DOM - Anbuselvan");
  console.log("Event Happening");

  // removing
  // creditBtnEl.removeEventListener("click", handleCreditMsg);
};

// Adding an EventListener
creditBtnEl.addEventListener("click", handleCreditMsg, { once: true });
