function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input[type="number"]');
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const divColectionEl = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  let initialSize = 30;
  for (let i = 0; i < inputEl.value; i += 1) {
    const newDivEl = document.createElement("div");
    newDivEl.style.backgroundColor = `${getRandomHexColor()}`;
    newDivEl.style.width = `${initialSize}px`;
    newDivEl.style.height = `${initialSize}px`;
    initialSize += 10;
    divColectionEl.append(newDivEl);
  }
  inputEl.value = "";
}

function destroyBoxes() {
  divColectionEl.innerHTML = "";
}
