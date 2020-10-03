document.getElementById("one").addEventListener("click", function (e) {
  Number((displayElement.innerText += one));

  if (firstNumber == null) {
    getFirstNumber(one);
  } else {
    getSecondNumber(one);
  }
});
document.getElementById("two").addEventListener("click", function (e) {
  Number((displayElement.innerText += two));
  if (firstNumber === null) {
    getFirstNumber(two);
  } else {
    getSecondNumber(two);
  }
});
document.getElementById("three").addEventListener("click", function (e) {
  Number((displayElement.innerText += three));
  if (firstNumber === null) {
    getFirstNumber(three);
  } else {
    getSecondNumber(three);
  }
});
document.getElementById("four").addEventListener("click", function (e) {
  Number((displayElement.innerText += four));
  if (firstNumber === null) {
    getFirstNumber(four);
  } else {
    getSecondNumber(four);
  }
});
document.getElementById("five").addEventListener("click", function (e) {
  Number((displayElement.innerText += five));
  if (firstNumber === null) {
    getFirstNumber(five);
  } else {
    getSecondNumber(five);
  }
});
document.getElementById("six").addEventListener("click", function (e) {
  Number((displayElement.innerText += six));
  if (firstNumber === null) {
    getFirstNumber(six);
  } else {
    getSecondNumber(six);
  }
});
document.getElementById("seven").addEventListener("click", function (e) {
  Number((displayElement.innerText += seven));
  if (firstNumber === null) {
    getFirstNumber(seven);
  } else {
    getSecondNumber(seven);
  }
});
document.getElementById("eight").addEventListener("click", function (e) {
  Number((displayElement.innerText += eight));
  if (firstNumber === null) {
    getFirstNumber(eight);
  } else {
    getSecondNumber(eight);
  }
});
document.getElementById("nine").addEventListener("click", function (e) {
  Number((displayElement.innerText += nine));
  if (firstNumber === null) {
    getFirstNumber(nine);
  } else {
    getSecondNumber(nine);
  }
});
document.getElementById("zero").addEventListener("click", function (e) {
  Number((displayElement.innerText += zero));
  if (firstNumber === null) {
    getFirstNumber(zero);
  } else {
    getSecondNumber(zero);
  }
});

document.getElementById("addition").addEventListener("click", function (e) {
  operator = "+";
  displayElement.innerText = "";
  if (firstNumber) {
    firstNumber = firstNumber + secondNumber.toString();
    firstNumber = parseInt(firstNumber);
  }
  secondNumber = null;
});

document.getElementById("subtract").addEventListener("click", function (e) {
  operator = "-";
  displayElement.innerText = "";
  if (firstNumber) {
    firstNumber = firstNumber + secondNumber.toString();
    firstNumber = parseInt(firstNumber);
  }
  secondNumber = null;
});
document.getElementById("multiply").addEventListener("click", function (e) {
  operator = "*";
  displayElement.innerText = "";
  if (firstNumber) {
    firstNumber = firstNumber + secondNumber.toString();
    firstNumber = parseInt(firstNumber);
  }
  secondNumber = null;
});
document.getElementById("point").addEventListener("click", function (e) {
  displayElement.innerText += '.';
  if (firstNumber) {
    firstNumber = firstNumber.toString() + secondNumber.toString();
    firstNumber = parseInt(firstNumber);
  }
  secondNumber = null;
});
document.getElementById("equal").addEventListener("click", function (e) {
  if (firstNumber) {
  }
  equals();
});
document.getElementById("divide").addEventListener("click", function (e) {
  operator = "/";
  displayElement.innerText = "";
  if (firstNumber) {
    firstNumber = firstNumber + secondNumber.toString();
    firstNumber = parseInt(firstNumber);
  }
  secondNumber = null;
});

document.getElementById("del").addEventListener("click", function (e) {
  del();
});
document.getElementById("all-clear").addEventListener("click", function (e) {
  allClear();
});
