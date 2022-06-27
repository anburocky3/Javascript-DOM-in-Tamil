const formEl = document.forms.feedback;
const btnEl = document.querySelector("form button");

const handleSubmit = (event) => {
  event.preventDefault(); // Prevent default behaviour

  // construct a FormData object, which fires the formdata event
  const formData = new FormData(formEl);

  // formdata gets modified by the formdata event
  console.log("My API KEY IS: ", formData.get("api-key"));
};

const handleFormData = (e) => {
  console.log("formdata fired!");

  const formData = e.formData;

  // useful methods
  formData.append("api-key", "sadsadsadsadsadsa"); // append new key-value pairs
  console.log([...formData.entries()]); // get entries
  console.log([...formData.values()]); // get only values
  console.log(formData.get("email")); // get individual form element's value
  console.log(formData.getAll("type")); // returns an array of all the values by a key name
  console.log(formData.has("gender")); // returns true if the FormData object contains a key name.
  console.log([...formData.keys()]); // returns an iterator of all the keys.
  formData.set("hobbies", "Learning new things"); //sets a new value for an existing key name
  formData.delete("terms"); // deletes the key
  console.log([...formData.values()]); //returns an iterator of all the values in the FormData object.
};

formEl.addEventListener("submit", handleSubmit);

formEl.addEventListener("formdata", handleFormData);
