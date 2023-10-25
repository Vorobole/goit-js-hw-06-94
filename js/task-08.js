const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const emailInput = loginForm.querySelector('input[name="email"]');
  const passwordInput = loginForm.querySelector('input[name="password"]');

  if (!emailInput.value || !passwordInput.value) {
    alert("All fields must be filled out!");
  } else {
    const formObject = {
      email: emailInput.value,
      password: passwordInput.value,
    };

    console.log(formObject);
    loginForm.reset();
  }
});
