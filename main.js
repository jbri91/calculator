displayElement = document.getElementById('display');

document.getElementById("one").addEventListener("click", function (e) {
    type = displayElement.innerText += 1;
    Number(type);
    console.log(typeof type);
  });
document.getElementById("two").addEventListener("click", function (e) {
  displayElement.innerText += 2;
});
document.getElementById("three").addEventListener("click", function (e) {
  displayElement.innerText += 3;
});
document.getElementById("four").addEventListener("click", function (e) {
  displayElement.innerText += 4;
});
document.getElementById("five").addEventListener("click", function (e) {
  displayElement.innerText += 5;
});
document.getElementById("six").addEventListener("click", function (e) {
  displayElement.innerText += 6;
});
document.getElementById("seven").addEventListener("click", function (e) {
  displayElement.innerText += 7;
});
document.getElementById("eight").addEventListener("click", function (e) {
  displayElement.innerText += 8;
});
document.getElementById("nine").addEventListener("click", function (e) {
  displayElement.innerText += 9;
});
document.getElementById("zero").addEventListener("click", function (e) {
  displayElement.innerText += 0;
});
document.getElementById("addition").addEventListener("click", function (e) {
  displayElement.innerText += "+";
  return num1 + num2;
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
    alert("Enter A Number");
  } else {
    del();
  }
});
document.getElementById("all-clear").addEventListener("click", function (e) {
  console.log("AC");
  allClear();
});

displayElement.innerHTML = "";

function addition(num1, num2) {
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
