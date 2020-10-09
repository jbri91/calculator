document.getElementById("one").addEventListener("click", function (e) {
  if (operator === null) {
    getFirstNumber(one);
    displayElement.innerText += firstNumber;
    firstNumber = displayElement.innerText;
  }

if (operator != null && firstNumber != null &&  secondNumber == null) {
  displayElement.innerText = secondNumber;

}
  if (operator != null) {
    getSecondNumber(one);
    displayElement.innerText += secondNumber;
    secondNumber = displayElement.innerText; 
  }
});

document.getElementById("two").addEventListener("click", function (e) {
  if (operator === null) {
    getFirstNumber(two);
    displayElement.innerText += firstNumber;
    firstNumber = displayElement.innerText;
  }

  if (operator != null && firstNumber != null && secondNumber == null) {
    displayElement.innerText = secondNumber;
  }


  if (operator != null) {
    getSecondNumber(two);
    displayElement.innerText += secondNumber;
    secondNumber = displayElement.innerText; 
  }
});

document.getElementById("three").addEventListener("click", function (e) {
  if (operator === null) {
    getFirstNumber(three);
    displayElement.innerText += firstNumber;
    firstNumber = displayElement.innerText;
  }

  if (operator != null && firstNumber != null && secondNumber == null) {
    displayElement.innerText = secondNumber;
  }

  if (operator != null) {
    getSecondNumber(three);
    displayElement.innerText += secondNumber;
    secondNumber = displayElement.innerText; 

  }
});

document.getElementById("four").addEventListener("click", function (e) {
  if (operator === null) {
    getFirstNumber(four);
    displayElement.innerText += firstNumber;
    firstNumber = displayElement.innerText;
  }

  if (operator != null && firstNumber != null && secondNumber == null) {
    displayElement.innerText = secondNumber;
  }

  if (operator != null) {
    getSecondNumber(four);
    displayElement.innerText += secondNumber;
    secondNumber = displayElement.innerText; 
  }
})

document.getElementById("five").addEventListener("click", function (e) {
  if (operator === null) {
    getFirstNumber(five);
    displayElement.innerText += firstNumber;
    firstNumber = displayElement.innerText;
  }

  if (operator != null && firstNumber != null && secondNumber == null) {
    displayElement.innerText = secondNumber;
  }

  if (operator != null) {
    getSecondNumber(five);
    displayElement.innerText += secondNumber;
    secondNumber = displayElement.innerText; 
  }
});
document.getElementById("six").addEventListener("click", function (e) {
  if (operator === null) {
    getFirstNumber(six);
    displayElement.innerText += firstNumber;
  firstNumber = displayElement.innerText;
  }

  if (operator != null && firstNumber != null && secondNumber == null) {
    displayElement.innerText = secondNumber;
  }

  if (operator != null) {
    getSecondNumber(six);
    displayElement.innerText += secondNumber;
    secondNumber = displayElement.innerText; 
  }
});
document.getElementById("seven").addEventListener("click", function (e) {
  if (operator === null) {
    getFirstNumber(seven);
    displayElement.innerText += firstNumber;
    firstNumber = displayElement.innerText;
  }

  if (operator != null && firstNumber != null && secondNumber == null) {
    displayElement.innerText = secondNumber;
  }

  if (operator != null) {
    getSecondNumber(seven);
    displayElement.innerText += secondNumber;
    secondNumber = displayElement.innerText; 
  }
});
document.getElementById("eight").addEventListener("click", function (e) {
  if (operator === null) {
    getFirstNumber(eight);
    displayElement.innerText += firstNumber;
    firstNumber = displayElement.innerText;
  }

  if (operator != null && firstNumber != null && secondNumber == null) {
    displayElement.innerText = secondNumber;
  }

  if (operator != null) {
    getSecondNumber(eight);
    displayElement.innerText += secondNumber;
    secondNumber = displayElement.innerText; 
  }
});

document.getElementById("nine").addEventListener("click", function (e) {
  if (operator === null) {
    getFirstNumber(nine);
    displayElement.innerText += firstNumber;
    firstNumber = displayElement.innerText;
  }

  if (operator != null && firstNumber != null && secondNumber == null) {
    displayElement.innerText = secondNumber;
  }

  if (operator != null) {
    getSecondNumber(nine);
    displayElement.innerText += secondNumber;
    secondNumber = displayElement.innerText; 
  }
});

document.getElementById("zero").addEventListener("click", function (e) {
  if (operator === null) {
    getFirstNumber(zero);
    displayElement.innerText += firstNumber;
    firstNumber = displayElement.innerText;
  }

  if (operator != null && firstNumber != null && secondNumber == null) {
    displayElement.innerText = secondNumber;
  }

  if (operator != null) {
    getSecondNumber(zero);
    displayElement.innerText += secondNumber; 
    secondNumber = displayElement.innerText;
  
  }
});

document.getElementById("addition").addEventListener("click", function (e) {
  displayElement.innerText = "+";

  if (firstNumber && secondNumber && operator) {
    firstNumber = parseFloat(firstNumber) + parseFloat(secondNumber);
    secondNumber = null;
    displayElement.innerText = firstNumber;
  }
  operator = "+";
});
document.getElementById("subtract").addEventListener("click", function (e) {
  displayElement.innerText = "-";

  if (firstNumber && secondNumber && operator) {
    firstNumber = parseInt(firstNumber) - parseInt(secondNumber);
    secondNumber = null;
    displayElement.innerText = firstNumber;
  }
  operator = "-";
});
document.getElementById("multiply").addEventListener("click", function (e) {
  displayElement.innerText = "X";

  if (firstNumber && secondNumber && operator) {
    firstNumber = parseInt(firstNumber) * parseInt(secondNumber);
    secondNumber = null;
    displayElement.innerText = firstNumber;
  }
  operator = "*";
});
document.getElementById("divide").addEventListener("click", function (e) {
  displayElement.innerText = "/";
  if (firstNumber && secondNumber && operator) {
    firstNumber = parseInt(firstNumber) - parseInt(secondNumber);
    secondNumber = null;
    displayElement.innerText = firstNumber;
  }
  operator = "/";
});

document.getElementById("point").addEventListener("click", function (e) {

  if (operator === null) {
    getFirstNumber(point);
    displayElement.innerText += firstNumber;
    firstNumber = displayElement.innerText;
  }

  if (operator != null && firstNumber != null && secondNumber == null) {
    displayElement.innerText = secondNumber;
  }

  if (operator != null) {
    getSecondNumber(point);
    displayElement.innerText += secondNumber;
    secondNumber = displayElement.innerText; 
  }
});
document.getElementById("equal").addEventListener("click", function (e) {
  equals();
});
document.getElementById("del").addEventListener("click", function (e) {
  del();
});
document.getElementById("all-clear").addEventListener("click", function (e) {
  allClear();
});
