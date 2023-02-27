const inputEl = document.querySelector("#name-input");
const nameLabelEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
  event.preventDefault();
  if (inputEl.value.trim() === "") {
    nameLabelEl.textContent = "Anonymous";
  } else {
    nameLabelEl.textContent = event.currentTarget.value;
  }
});
