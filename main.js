function calRect(event) {
  if (overflow()) {
    alert("Invalid Values");
    event.preventDefault();
    return;
  }
  printArea();
  drawSomething();
  saveLocalValues();
  event.preventDefault();
}

function printArea() {
  const spanArea = document.querySelector("#rectSpace");
  spanArea.textContent = `Rectangle Area: ${calArea()}`;
}

function calArea() {
  const widthBox = document.querySelector("#width");
  const width = +widthBox.value;
  const heightBox = document.querySelector("#height");
  const height = +heightBox.value;
  return width * height;
}

function overflow() {
  if (widthOverflow() || heightOverflow()) {
    return true;
  }
  return false;
}

function widthOverflow() {
  const widthBox = document.querySelector("#width");
  const width = +widthBox.value;
  const xBox = document.querySelector("#x");
  const x = +xBox.value;
  if (width + x > 300) {
    return true;
  }
  return false;
}

function heightOverflow() {
  const heightBox = document.querySelector("#height");
  const height = +heightBox.value;
  const yBox = document.querySelector("#y");
  const y = +yBox.value;
  if (height + y > 300) {
    return true;
  }
  return false;
}

function drawSomething() {
  const widthBox = document.querySelector("#width");
  const width = +widthBox.value;
  const heightBox = document.querySelector("#height");
  const height = +heightBox.value;
  const xBox = document.querySelector("#x");
  const x = +xBox.value;
  const yBox = document.querySelector("#y");
  const y = +yBox.value;
  const canvas = document.querySelector("#myCanvas");
  const painter = canvas.getContext(`2d`);
  painter.fillStyle = chooseColor(counter);
  painter.fillRect(x, y, width, height);
  counter++;
}

function chooseColor(count) {
  if (count > colors.length) {
    counter = 0;
  }
  const i = count;
  return colors[i];
}

function reset(event) {
  clearCanvas();
  clearValues();
  clearLocalStorage();
  event.preventDefault();
}

function clearLocalStorage() {
  window.localStorage.clear();
}

function clearValues() {
  const widthBox = document.querySelector("#width");
  const heightBox = document.querySelector("#height");
  const xBox = document.querySelector("#x");
  const yBox = document.querySelector("#y");
  const inputs = [widthBox, heightBox, xBox, yBox];
  for (const input of inputs) {
    InputDelete(input);
  }
}

function InputDelete(input) {
  input.value = NaN;
}

function clearCanvas() {
  const canvas = document.querySelector("#myCanvas");
  const painter = canvas.getContext(`2d`);
  painter.clearRect(0, 0, 300, 300);
}

function saveLocalValues() {
  saveWidth();
  saveHeight();
  saveY();
  saveX();
}

function saveWidth() {
  const widthBox = document.querySelector("#width");
  const width = +widthBox.value;
  localStorage.setItem("width", JSON.stringify(width));
}

function saveHeight() {
  const heightBox = document.querySelector("#height");
  const height = +heightBox.value;
  localStorage.setItem("height", JSON.stringify(height));
}

function saveX() {
  const xBox = document.querySelector("#x");
  const x = +xBox.value;
  localStorage.setItem("x", JSON.stringify(x));
}

function saveY() {
  const yBox = document.querySelector("#y");
  const y = +yBox.value;
  localStorage.setItem("y", JSON.stringify(y));
}

function loadLocal() {
  const widthBox = document.querySelector("#width");
  const heightBox = document.querySelector("#height");
  const xBox = document.querySelector("#x");
  const yBox = document.querySelector("#y");
  widthBox.value = JSON.parse(localStorage.getItem("width"));
  heightBox.value = JSON.parse(localStorage.getItem("height"));
  xBox.value = JSON.parse(localStorage.getItem("x"));
  yBox.value = JSON.parse(localStorage.getItem("y"));
}

function onWindowLoad() {
  const calButton = document.querySelector("#calBtn");
  const clearButton = document.querySelector("#resetBtn");
  calButton.onsubmit = calRect;
  clearButton.onclick = reset;
  loadLocal();
}
window.onload = onWindowLoad;

const colors = [
  "red",
  "blue",
  "yellow",
  "green",
  "orange",
  "purple",
  "brown",
  "#fffdd0",
];

let counter = 0;
