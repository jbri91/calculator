document.getElementById("one").addEventListener("click", function (e) {
  if (operator === null) {
    getFirstNumber(one);
    displayElement.innerText = firstNumber;
  }
  if (operator != null) {
    getSecondNumber(one);
    displayElement.innerText = secondNumber;
  }
});

document.getElementById("two").addEventListener("click", function (e) {
  if (operator === null) {
    getFirstNumber(two);
    displayElement.innerText = firstNumber;
  }
  if (operator != null) {
    getSecondNumber(two);
    displayElement.innerText = secondNumber;
  }
});

document.getElementById("three").addEventListener("click", function (e) {
  if (operator === null) {
    getFirstNumber(three);
    displayElement.innerText = firstNumber;
  }
  if (operator != null) {
    getSecondNumber(three);
    displayElement.innerText = secondNumber;
  }
});

document.getElementById("four").addEventListener("click", function (e) {
  if (operator === null) {
    getFirstNumber(four);
    displayElement.innerText = firstNumber;
  }
  if (operator != null) {
    getSecondNumber(four);
    displayElement.innerText = secondNumber;
  }
});
document.getElementById("five").addEventListener("click", function (e) {
  if (operator === null) {
    getFirstNumber(five);
    displayElement.innerText = firstNumber;
  }
  if (operator != null) {
    getSecondNumber(five);
    displayElement.innerText = secondNumber;
  }
});
document.getElementById("six").addEventListener("click", function (e) {
  if (operator === null) {
    getFirstNumber(six);
    displayElement.innerText = firstNumber;
  }
  if (operator != null) {
    getSecondNumber(six);
    displayElement.innerText = secondNumber;
  }
});
document.getElementById("seven").addEventListener("click", function (e) {
  if (operator === null) {
    getFirstNumber(seven);
    displayElement.innerText = firstNumber;
  }
  if (operator != null) {
    getSecondNumber(seven);
    displayElement.innerText = secondNumber;
  }
});
document.getElementById("eight").addEventListener("click", function (e) {
  if (operator === null) {
    getFirstNumber(eight);
    displayElement.innerText = firstNumber;
  }
  if (operator != null) {
    getSecondNumber(eight);
    displayElement.innerText = secondNumber;
  }
});

document.getElementById("nine").addEventListener("click", function (e) {
  if (operator === null) {
    getFirstNumber(nine);
    displayElement.innerText = firstNumber;
  }
  if (operator != null) {
    getSecondNumber(nine);
    displayElement.innerText = secondNumber;
  }
});

document.getElementById("zero").addEventListener("click", function (e) {
  if (operator === null) {
    getFirstNumber(zero);
    displayElement.innerText = firstNumber;
  }
  if (operator != null) {
    getSecondNumber(zero);
    displayElement.innerText = secondNumber;
  }
});

document.getElementById("addition").addEventListener("click", function (e) {
  displayElement.innerText = "";

  if (firstNumber && secondNumber && operator) {
    firstNumber = parseInt(firstNumber) + parseInt(secondNumber);
    secondNumber = null;
    displayElement.innerText = firstNumber;
  }
  operator = "+";
});

document.getElementById("subtract").addEventListener("click", function (e) {
  displayElement.innerText = "";

  if (firstNumber && secondNumber && operator) {
    firstNumber = parseInt(firstNumber) - parseInt(secondNumber);
    secondNumber = null;
    displayElement.innerText = firstNumber;
  }
  operator = "-";
});

document.getElementById("multiply").addEventListener("click", function (e) {
  displayElement.innerText = "";

  if (firstNumber && secondNumber && operator) {
    firstNumber = parseInt(firstNumber) * parseInt(secondNumber);
    secondNumber = null;
    displayElement.innerText = firstNumber;
  }
  operator = "*";
});

document.getElementById("point").addEventListener("click", function (e) {
  // Number((displayElement.innerText += "."));

  if (operator === null) {
    getFirstNumber('.');
   displayElement.innerText = firstNumber;
 } 
 if (operator != null) {
   getSecondNumber('.');
   displayElement.innerText = secondNumber; 
} 

});

document.getElementById("equal").addEventListener("click", function (e) {
  equals();
});

document.getElementById("divide").addEventListener("click", function (e) {
  displayElement.innerText = "";
  if (firstNumber && secondNumber && operator) {
    firstNumber = parseInt(firstNumber) - parseInt(secondNumber);
    secondNumber = null;
    displayElement.innerText = firstNumber;
  }
  operator = "/";
});

document.getElementById("del").addEventListener("click", function (e) {
  del();
});
document.getElementById("all-clear").addEventListener("click", function (e) {
  allClear();
});
