Array.from(document.getElementsByClassName('number')).map(num => {
  num.addEventListener('click', e => {
    let selectedNum = e.target.getAttribute('name');

    if (operator === null) {
      getFirstNumber(selectedNum);
      displayElement.innerText += firstNumber;
    firstNumber = displayElement.innerText;
    }
  
    if (operator != null && firstNumber != null && secondNumber == null) {
      displayElement.innerText = secondNumber;
    }
  
    if (operator != null) {
      getSecondNumber(selectedNum);
      displayElement.innerText += secondNumber;
      secondNumber = displayElement.innerText; 
    }
  })
})

const operators =  {
'addition': '+',
'subtract': '-',
'multiply': '*',
'divide': '/'
}

Array.from(document.getElementsByClassName('operator')).map(op => {
  op.addEventListener('click', e => {
    let doMath = {
      '+': parseFloat(firstNumber) + parseFloat(secondNumber),
      '-': parseFloat(firstNumber) - parseFloat(secondNumber),
      '*': parseFloat(firstNumber) * parseFloat(secondNumber),
      '/': parseFloat(firstNumber) / parseFloat(secondNumber)
    }

    let selectedOperation = operators[e.target.getAttribute('id')]

    displayElement.innerText = selectedOperation;

    if (firstNumber && secondNumber && operator) {
      firstNumber = doMath[operator];
      secondNumber = null;
      displayElement.innerText = firstNumber;
      operator = selectedOperation
    }

    operator = selectedOperation;
  })
})

document.getElementById("point").addEventListener("click", function (e) {

  if (operator === null) {
    getFirstNumber('.');
    displayElement.innerText += firstNumber;
    firstNumber = displayElement.innerText;
  }

  if (operator != null && firstNumber != null && secondNumber == null) {
    displayElement.innerText = secondNumber;
  }

  if (operator != null) {
    getSecondNumber('.');
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
