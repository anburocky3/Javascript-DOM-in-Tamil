const formEl = document.forms.feedback;

const handleSubmit = (event) => {
  event.preventDefault(); // Prevent default behaviour

  const formData = new FormData(event.target);

  // 1. Query String
  // name=Xandra+Garrison&category=technical-support&email=hevabada%40mailinator.com&msg=Qui+voluptas+iure+se&terms=on
  const data = [...formData.entries()];
  const asStringManual = data
    .map((x) => `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`)
    // or  .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join("&"); // old way

  // Or Using this
  const asString = new URLSearchParams(formData).toString();

  console.log(asString);

  // 2. Using JSON
  const asJSON = JSON.stringify(Object.fromEntries(formData));

  console.log(asJSON);
};

formEl.addEventListener("submit", handleSubmit);
