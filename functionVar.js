let firstNumber = null;
let secondNumber = null;
let operator = null;

let displayElement = document.getElementById("display");

function getFirstNumber(number) {
  firstNumber == null || operator == null
    ? (firstNumber = number)
    : (firstNumber += number);
  return firstNumber;
}

function getSecondNumber(number) {
  secondNumber == null || operator !== null
    ? (secondNumber = number)
    : (secondNumber += number);

  return secondNumber;
}

function addition() {
  if (operator == "+") {
    firstNumber = parseFloat(firstNumber) + parseFloat(secondNumber);
    secondNumber = null;
    operator = null;
  }
  displayElement.innerText = firstNumber;
}

function subtraction() {
  if (operator == "-") {
    firstNumber = parseInt(firstNumber) - parseInt(secondNumber);
    secondNumber = null;
    operator = null;
  }
  displayElement.innerText = firstNumber;
}

function division() {
  if (operator == "/") {
    firstNumber = firstNumber / secondNumber;
    secondNumber = null;
    operator = null;
  }
  displayElement.innerText = firstNumber;
}

function multiplication() {
  if (operator == "*") {
    firstNumber = firstNumber * secondNumber;
    secondNumber = null;
    operator = null;
  }
  displayElement.innerText = firstNumber;
}

function allClear() {
  displayElement.innerHTML = "";
  firstNumber = null;
  secondNumber = null;
  operator = null;
}

function del() {
  if (firstNumber && operator == null && secondNumber == null) {
    removeNumber = firstNumber.replace(firstNumber, null);
    firstNumber = removeNumber;
    displayElement.innerText = "";
  }

  if (firstNumber && secondNumber && operator != null) {
    removeNumber = secondNumber.replace(secondNumber, null);
    secondNumber = removeNumber;
    displayElement.innerText = "";
  }

  if (firstNumber && operator && secondNumber == null) {
    removeOperator = operator.replace(operator, null);
    operator = removeOperator;
    displayElement.innerText = "";
  }
}

function equals() {
  if (operator == "+") {
    addition();
  } else if (operator == "-") {
    subtraction();
  } else if (operator == "/") {
    division();
  } else {
    multiplication();
  }
  if (
    displayElement.innerText == "Infinity" ||
    displayElement.innerText == "NaN"
  ) {
    displayElement.innerText = "Can Not Divide By Zero";
  }
}
