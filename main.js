const numberDisplay = document.querySelector("#number");
const addBtn = document.querySelector("#add");
const subtractBtn = document.querySelector("#subtract");
const resetBtn = document.querySelector("#reset");

let number = 0;

function add() {
  number++;
  update();
}

function substract() {
  number--;
  update();
}

function update() {
  numberDisplay.textContent = number;
}

function reset() {
  number = 0;
  update();
}

window.addEventListener("load", update);
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", substract);
resetBtn = addEventListener("click", reset);
