document.getElementById("one").addEventListener("click", function (e) {
    one1 = Number((displayElement.innerText += one));
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