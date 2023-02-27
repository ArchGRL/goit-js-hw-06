const loginFormEl = document.querySelector(".login-form");

loginFormEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  const data = {
    [email.name]: email.value,
    [password.name]: password.value,
  };
  console.log(data);
  event.currentTarget.reset();
}
