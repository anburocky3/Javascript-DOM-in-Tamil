const formEl = document.forms.feedback;
const btnEl = document.querySelector("form button");

const handleSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(formEl);

  const jsonData = JSON.stringify(Object.fromEntries(formData));

  // Send to Backend
  // 1. XMLHttpRequest
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://reqres.in/api/users/2", true);
  xhr.onload = function () {
    const obj = JSON.parse(xhr.responseText);
    document.getElementById("response").innerText = obj.data.first_name;
  };
  xhr.send();

  // 2. fetch(), axios()
  fetch("https://reqres.in/api/users?page=2", {
    method: "GET",
    // headers: {
    //   // 'Content-Type': 'application/x-www-form-urlencoded' // MIME
    //   "Content-Type": "application/json", // MIME
    // },
    // body: jsonData,
  })
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("response").innerText = JSON.stringify(data.data);
    });
};

formEl.addEventListener("submit", handleSubmit);
