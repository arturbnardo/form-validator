const form = document.getElementById("register-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmpw = document.getElementById("confirmpw");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const isRequiredValid = checkRequired([username, email, password, confirmpw])
})

function checkRequired(inputArray) {
  let isValid = true

  inputArray.forEach(input => {
    if(input.value.trim() === "") {
      showError(input, `${formatFieldName(input)} is required`)
      isValid = false
    } else {
      showSuccess(input)
    }
  })
  return isValid
}

function formatFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function showError(input, message) {
  const formGroup = input.parentElement
  formGroup.className = "form-group error"
  const small = formGroup.querySelector("small")
  small.innerText = message
}