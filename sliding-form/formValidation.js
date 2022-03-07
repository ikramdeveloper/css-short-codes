const regex = {
  name: /^[\w]{5}$/,
  email: /^[\w]{5}@[a-z]{2,10}\.[a-z]{2,8}(\.[a-z]{2,8})?$/,
  password:
    /^(?=(.*[A-Z]){1})(?=(.*[a-z]){1})(?=(.*[0-9]){1})(?=(.*[@#$%^!&+=.\-_*]){2})([a-zA-Z0-9@#$%^!&+=*.\-_]){8,}$/,
};

const singUpInputs = document.querySelectorAll(".sign-up-container input");
const validationArray = [];
const validate = (field, regex) => {
  const test = regex.test(field.value);
  if (test) {
    field.classList.remove("invalid");
    field.classList.add("valid");
  }
  if (!test) {
    field.classList.remove("valid");
    field.classList.add("invalid");
  }
};

for (let input of singUpInputs) {
  input.addEventListener("input", (e) => {
    validate(e.target, regex[e.target.attributes.name.value]);
  });
}
