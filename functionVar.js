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

let operator1 = 0;
let operator2 = 0;
let operatorSymbol = 0;


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

function addition(operator1, operator2) {
  operator1 = displayElement.innerText.substr(0);
  console.log(operator1)
  displayElement.innerText = " ";
  operator2 = displayElement.innerText.substr(0);
  console.log(operator2);
  return addition
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

function equals() {
  //Evaluate expression and submit to display. 
}




