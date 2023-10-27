// JavaScript (script.js)

let currentExpression = "";

function addToDisplay(value) {
  currentExpression += value;
  document.getElementById("display").textContent = currentExpression;
}

function clearDisplay() {
  currentExpression = "";
  document.getElementById("display").textContent = "0";
}

function removeLastCharacter() {
  currentExpression = currentExpression.slice(0, -1);
  document.getElementById("display").textContent = currentExpression;
}

function calculateResult() {
  try {
    currentExpression = eval(currentExpression);
    document.getElementById("display").textContent = currentExpression;
  } catch (error) {
    document.getElementById("display").textContent = "Error";
  }
}
