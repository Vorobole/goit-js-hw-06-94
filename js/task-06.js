const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", () => {
  const inputValue = validationInput.value;
  const requiredLength = Number(validationInput.dataset.length);

  if (inputValue.length === requiredLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
