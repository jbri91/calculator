let displayElement = document.getElementById("display");

const one = Number(1);
const two = Number(2);
const three = Number(3);
const four = Number(4);
const five = Number(5);
const six = Number(6);
const seven = Number(7);
const eight = Number(8);
const nine = Number(9);
const zero = Number(0);

function addition(x, y) {
  num1 = Number(x);
  num2 = Number(y);
  addition = num1 + num2;
  return (displayElement.innerHTML = addition);
}

function subtraction(num1, num2) {
  subtraction = num1 - num2;
  return (displayElement.innerHTML = subtraction);
}

function division(num1, num2) {
  division = num1 / num2;
  return (displayElement.innerHTML = division);
}

function multiplication(num1, num2) {
  multiplication = num1 * num2;
  return (displayElement.innerHTML = multiplication);
}

function allClear() {
  displayElement.innerHTML = "";
}

function del() {
  removeNumber = displayElement.innerText.slice(0, -1);
  return (displayElement.innerText = removeNumber);
}

