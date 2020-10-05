document.getElementById("one").addEventListener("click", function (e) {
  displayElement.innerText = ""
  displayElement.innerText += one;

  if (operator === null) {
    getFirstNumber(displayElement.innerText);
  }

  if (operator != null) {
    getSecondNumber(displayElement.innerText);
  }
});

document.getElementById("two").addEventListener("click", function (e) {
  Number((displayElement.innerText += two));
  if (operator === null) {
    getFirstNumber(displayElement.innerText);
  }

  if (operator != null) {
    getSecondNumber(displayElement.innerText);
  }
});
document.getElementById("three").addEventListener("click", function (e) {
  Number((displayElement.innerText += three));
  if (operator === null) {
    getFirstNumber(displayElement.innerText);
  }

  if (operator != null) {
    getSecondNumber(displayElement.innerText);
  }
});

document.getElementById("four").addEventListener("click", function (e) {
  Number((displayElement.innerText += four));
  if (operator === null) {
    getFirstNumber(displayElement.innerText);
  }

  if (operator != null) {
    getSecondNumber(displayElement.innerText);
  }
});
document.getElementById("five").addEventListener("click", function (e) {
  Number((displayElement.innerText += five));
  if (operator === null) {
    getFirstNumber(displayElement.innerText);
  }

  if (operator != null) {
    getSecondNumber(displayElement.innerText);
  }
});
document.getElementById("six").addEventListener("click", function (e) {
  Number((displayElement.innerText += six));
  if (operator === null) {
    getFirstNumber(displayElement.innerText);
  }

  if (operator != null) {
    getSecondNumber(displayElement.innerText);
  }
});
document.getElementById("seven").addEventListener("click", function (e) {
  Number((displayElement.innerText += seven));
  if (operator === null) {
    getFirstNumber(displayElement.innerText);
  }

  if (operator != null) {
    getSecondNumber(displayElement.innerText);
  }
});
document.getElementById("eight").addEventListener("click", function (e) {
  Number((displayElement.innerText += eight));
  if (operator === null) {
    getFirstNumber(displayElement.innerText);
  }

  if (operator != null) {
    getSecondNumber(displayElement.innerText);
  }
});
document.getElementById("nine").addEventListener("click", function (e) {
  Number((displayElement.innerText += nine));
  if (operator === null) {
    getFirstNumber(displayElement.innerText);
  }

  if (operator != null) {
    getSecondNumber(displayElement.innerText);
  }
});
document.getElementById("zero").addEventListener("click", function (e) {
  Number((displayElement.innerText += zero));
  if (operator === null) {
    getFirstNumber(displayElement.innerText);
  }

  if (operator != null) {
    getSecondNumber(displayElement.innerText);
  }
});

document.getElementById("addition").addEventListener("click", function (e) {
  operator = "+";
  displayElement.innerText = "";
  sum = parseInt(secondNumber) + parseInt(firstNumber);

  if (firstNumber && secondNumber) {
    // sum = parseInt(secondNumber) + parseInt(firstNumber);
    displayElement.innerText = sum;
    parseInt(getFirstNumber(displayElement.innerText))
    // getSecondNumber(displayElement.innerText)
    sum += firstNumber;
    
  }

});

document.getElementById("subtract").addEventListener("click", function (e) {
  operator = "-";
  displayElement.innerText = "";
});
document.getElementById("multiply").addEventListener("click", function (e) {
  operator = "*";
  displayElement.innerText = "";
});
document.getElementById("point").addEventListener("click", function (e) {
  Number((displayElement.innerText += "."));
 
  if (operator === null) {
    getFirstNumber(displayElement.innerText);
  }

  if (operator != null) {
    getSecondNumber(displayElement.innerText);
  }
});

document.getElementById("equal").addEventListener("click", function (e) {
  equals();
});

document.getElementById("divide").addEventListener("click", function (e) {
  operator = "/";
  displayElement.innerText = "";
});

document.getElementById("del").addEventListener("click", function (e) {
  del();
});
document.getElementById("all-clear").addEventListener("click", function (e) {
  allClear();
});
