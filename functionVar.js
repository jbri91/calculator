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
const point = '.';

let firstNumber = null;
let secondNumber = null;
let operator = null;

let displayElement = document.getElementById("display");


function getFirstNumber(number) {
  firstNumber == null || operator == null? firstNumber = number : firstNumber += number;
return firstNumber;
}

function getSecondNumber(number) {
  secondNumber == null || operator !== null ? secondNumber = number : secondNumber += number;

  return secondNumber;
}


function addition() { 

  if (operator == '+') {
    answer = parseFloat(firstNumber) + parseFloat(secondNumber);
    }
    displayElement.innerText = answer; 

  }

function subtraction() {
  if (operator == '-') {
    answer = parseInt(firstNumber) - parseInt(secondNumber);
    }
    displayElement.innerText = answer;
}

function division() {
  if (operator == '/') {
    answer = firstNumber / secondNumber;
    }
    displayElement.innerText = answer;
}

function multiplication() {
  if (operator == '*') {
    answer = firstNumber * secondNumber;
    }
    displayElement.innerText = answer;
}

function allClear() {
  displayElement.innerHTML = "";
  firstNumber = null;
secondNumber = null;
operator = null;
}

function del() {

  if (firstNumber && operator == null && secondNumber == null) {
    removeNumber = firstNumber.replace(firstNumber, null)
    firstNumber = removeNumber;
    displayElement.innerText = ''
  }

  if (firstNumber && secondNumber && operator != null) {
    removeNumber = secondNumber.replace(secondNumber, null)
    secondNumber = removeNumber;
    displayElement.innerText = ''
  }

  if (firstNumber && operator && secondNumber == null) {
    removeOperator = operator.replace(operator, null)
    operator = removeOperator;
    displayElement.innerText = ''
  }
  
}

function equals() {
  if (operator == '+'){
    addition();
  } else if (operator == '-') {
    subtraction();
  } else if (operator == '/') {
    division();
  } else {
    multiplication();
  }
  if(displayElement.innerText == 'Infinity' || displayElement.innerText == 'NaN' ) {
    displayElement.innerText = 'Can Not Divide By Zero'
  }
}

