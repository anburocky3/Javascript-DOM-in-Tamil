const formEl = document.forms.feedback;
const btnEl = document.querySelector("form button");

const handleSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(formEl);

  // 1. QueryString: content-type: application/x-www-form-urlencoded
  // ?fullName=Tana+Stark&type=technical-support&email=wukoma%40mailinator.com&description=Doloremque+excepteur&terms=true
  const data = [...formData.entries()];

  const dataString = data
    // .map((x) => `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&"); // old way of doing

  console.log("usingMap", dataString); //

  const dataString2 = new URLSearchParams(formData).toString();

  console.log("URLSearchParams", dataString2);

  // 2. JSON
  const jsonData = JSON.stringify(Object.fromEntries(formData));

  // Send to Backend
  console.log("JSON BODY", jsonData);
};

formEl.addEventListener("submit", handleSubmit);
