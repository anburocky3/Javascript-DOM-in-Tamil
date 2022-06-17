const formEl = document.forms.feedback;

const handleSubmit = (event) => {
  event.preventDefault(); // Prevent default behaviour

  const formData = new FormData(event.target);

  // 1. Construct Form into readable form
  const data = [...formData.entries()];
  const asString = new URLSearchParams(formData).toString();

  const asJSON = JSON.stringify(Object.fromEntries(formData));

  // 2. Send the formdata to backend
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://reqres.in/api/products/3", true); // API: https://reqres.in/
  xhr.onload = function () {
    console.log(xhr.responseText);
  };
  xhr.send();

  // Or using fetch/axios
  fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: {
      // 'Content-Type': 'application/x-www-form-urlencoded',
      "Content-Type": "application/json",
    },
    // body: asJSON,
  })
    .then((res) => res.json())
    .then((res) => {
      document.querySelector("#responseTxt").innerText = JSON.stringify(res);
      console.log(res);
    });
};

formEl.addEventListener("submit", handleSubmit);

// Task: Create a button and when button clicks, it should get IP address via fetch() using `https://api.ipify.org/?format=json`
