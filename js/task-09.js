function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyBgColorEl = document.querySelector("body");
const btnChangeColorEl = document.querySelector(".change-color");
const colorValueEl = document.querySelector(".color");

btnChangeColorEl.addEventListener("click", () => {
  bodyBgColorEl.style.backgroundColor = getRandomHexColor();
  colorValueEl.textContent = `${getRandomHexColor()}`;
});
