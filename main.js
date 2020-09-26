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

document.getElementById("one").addEventListener("click", function (e) {
  one1 = Number((displayElement.innerText += one));
  console.log(typeof one1);
});
document.getElementById("two").addEventListener("click", function (e) {
  Number((displayElement.innerText += two));
});
document.getElementById("three").addEventListener("click", function (e) {
  Number((displayElement.innerText += three));
  console.log(typeof three);
});
document.getElementById("four").addEventListener("click", function (e) {
  Number((displayElement.innerText += four));
});
document.getElementById("five").addEventListener("click", function (e) {
  Number((displayElement.innerText += five));
});
document.getElementById("six").addEventListener("click", function (e) {
  Number((displayElement.innerText += six));
});
document.getElementById("seven").addEventListener("click", function (e) {
  Number((displayElement.innerText += seven));
});
document.getElementById("eight").addEventListener("click", function (e) {
  Number((displayElement.innerText += eight));
});
document.getElementById("nine").addEventListener("click", function (e) {
  Number((displayElement.innerText += nine));
});
document.getElementById("zero").addEventListener("click", function (e) {
  Number((displayElement.innerText += zero));
});
document.getElementById("addition").addEventListener("click", function (e) {
  displayElement.innerText += "+";
});
document.getElementById("subtract").addEventListener("click", function (e) {
  displayElement.innerText += "-";
});
document.getElementById("multiply").addEventListener("click", function (e) {
  displayElement.innerText += "*";
});
document.getElementById("point").addEventListener("click", function (e) {
  displayElement.innerText += ".";
});
document.getElementById("equal").addEventListener("click", function (e) {
  displayElement.innerText += "=";
});
document.getElementById("divide").addEventListener("click", function (e) {
  displayElement.innerText += "/";
});
document.getElementById("del").addEventListener("click", function (e) {
  del();
});
document.getElementById("all-clear").addEventListener("click", function (e) {
  allClear();
});

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

function evaluateString() {
    let numInput = document.getElementById('display').innerText;
    eval(numInput);
}
