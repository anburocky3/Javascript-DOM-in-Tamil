const inputFullName = document.querySelector("#fullName input");

// Get Forms using this
const formEl = document.forms.feedback;

const handleSubmit = (event) => {
  event.preventDefault(); // Prevent default behaviour

  // construct a FormData object, which fires the formdata event
  const formData = new FormData(formEl); // init

  // formdata gets modified by the formdata event
  console.log(formData.get("api-key"));
};

const handleFormData = (event) => {
  console.log("formdata fired");

  // modifies the form data
  const formData = event.formData;

  // FormData has useful methods
  formData.append("api-key", "authKey"); // append new key-value pairs
  formData.entries(); // get entries
  console.log([...formData.entries()]); // get entries
  console.log([...formData.values()]); // get only values
  console.log(formData.get("name")); // get individual form element's value
  console.log(formData.getAll("category")); // returns an array of all the values by a key name.
  console.log(formData.has("gender")); // returns true if the FormData object contains a key name.
  console.log([...formData.keys()]); // returns an iterator of all the keys.
  formData.set("hobbies", "Learning new things"); //sets a new value for an existing key name
  formData.delete("hobbies"); // deletes the key
  console.log([...formData.values()]); //returns an iterator of all the values in the FormData object.
};

formEl.addEventListener("submit", handleSubmit);
formEl.addEventListener("formdata", handleFormData);
