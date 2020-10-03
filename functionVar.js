// TEST CASE
// Description: Adding 1 + 2 = 3
// 1.) Click on the number one button
// EXPECTATION: Show 1 in the display
// ACTUAL: ???
// 2.) Click on the plus button
// EXPECTATION: Nothing. (Still showing 1 in the display)
// ACTUAL: ???
// 3.) Click on the number two button
// EXPECTATION: Show 2 in the display
// ACTUAL: ???
// 4.) Click on the equals button
// EXPECTATION: Show 3 in the display
// ACTUAL: ???
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

let firstNumber = null;
let secondNumber = null;
let operator = null;


let displayElement = document.getElementById("display");



function getFirstNumber(number) {
  firstNumber === null ? firstNumber = number : firstNumber += number.toString();
return firstNumber;
}

function getSecondNumber(number) {
  secondNumber === null ? secondNumber = number : secondNumber += number.toString();
return secondNumber;
}


function addition() { 
  if (operator == '+') {
    answer = firstNumber + parseInt(secondNumber);
    }
    displayElement.innerText = answer;
}


function subtraction() {
  if (operator == '-') {
    answer = firstNumber - parseInt(secondNumber);
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
  removeNumber = displayElement.innerText.slice(0, -1);
  return (displayElement.innerText = removeNumber);
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

  if (displayElement.innerText = 'Infinity') {
    displayElement.innerText = 'Cannot Divide By Zero'
  }

}




