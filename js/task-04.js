let counterValue = 0;
const valueEl = document.querySelector("#value");
const decBtnEl = document.querySelector('[data-action="decrement"]');
const incBtnEl = document.querySelector('[data-action="increment"]');

decBtnEl.addEventListener("click", () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});
incBtnEl.addEventListener("click", () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});
