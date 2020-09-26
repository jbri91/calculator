displayElement = document.getElementById('display');

const one = parseInt(1);
const two = parseInt(2);
const three = parseInt(3);
const four = parseInt(4);
const five = parseInt(5);
const six = parseInt(6);
const seven = parseInt(7);
const eight = parseInt(8);
const nine = parseInt(9);
const zero = parseInt(0);

document.getElementById("one").addEventListener("click", function (e) {
    parseInt(displayElement.innerText += one);
  });
document.getElementById("two").addEventListener("click", function (e) {
  parseInt(displayElement.innerText += two);
});
document.getElementById("three").addEventListener("click", function (e) {
  parseInt(displayElement.innerText += three);
  console.log(typeof three);
});
document.getElementById("four").addEventListener("click", function (e) {
  parseInt(displayElement.innerText += four);
});
document.getElementById("five").addEventListener("click", function (e) {
  parseInt(displayElement.innerText += five);
});
document.getElementById("six").addEventListener("click", function (e) {
  parseInt(displayElement.innerText += six);
});
document.getElementById("seven").addEventListener("click", function (e) {
  parseInt(displayElement.innerText += seven);
});
document.getElementById("eight").addEventListener("click", function (e) {
  parseInt(displayElement.innerText += eight);
});
document.getElementById("nine").addEventListener("click", function (e) {
  parseInt(displayElement.innerText += nine);
});
document.getElementById("zero").addEventListener("click", function (e) {
  parseInt(displayElement.innerText += zero);
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
  displayElement.innerText = "=";
});
document.getElementById("divide").addEventListener("click", function (e) {
  displayElement.innerText += "/";
});
document.getElementById("del").addEventListener("click", function (e) {
  display = displayElement;
  if (display == " ") {
    alert("Enter A parseInt");
  } else {
    del();
  }
});
document.getElementById("all-clear").addEventListener("click", function (e) {
  allClear();
});

displayElement.innerHTML = "";


function addition(x, y) {
    num1 = parseInt(x);
    num2 = parseInt(y);
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
  removeparseInt = displayElement.innerText.slice(0, -1);
  return (displayElement.innerText = removeparseInt);
}
