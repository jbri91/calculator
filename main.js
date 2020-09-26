const one = document.getElementById('one').addEventListener('click', function (e) {
    document.getElementById('display').innerText += 1;
})
document.getElementById('two').addEventListener('click', function (e) {
    document.getElementById('display').innerText += 2;
})
document.getElementById('three').addEventListener('click', function (e) {
    document.getElementById('display').innerText += 3;
})
document.getElementById('four').addEventListener('click', function (e) {
    document.getElementById('display').innerText += 4;
})
document.getElementById('five').addEventListener('click', function (e) {
    document.getElementById('display').innerText += 5;
})
document.getElementById('six').addEventListener('click', function (e) {
    document.getElementById('display').innerText += 6;
})
document.getElementById('seven').addEventListener('click', function (e) {
    document.getElementById('display').innerText += 7;
})
document.getElementById('eight').addEventListener('click', function (e) {
    document.getElementById('display').innerText += 8;
})
document.getElementById('nine').addEventListener('click', function (e) {
    document.getElementById('display').innerText += 9;
})
document.getElementById('zero').addEventListener('click', function (e) {
    document.getElementById('display').innerText += 0;
})
document.getElementById('plus').addEventListener('click', function (e) {
    document.getElementById('display').innerText += '+' ; 
    console.log('+');
})
document.getElementById('subtract').addEventListener('click', function (e) {
    document.getElementById('display').innerText += '-';
})
document.getElementById('multiply').addEventListener('click', function (e) {
    document.getElementById('display').innerText += '*';
})
document.getElementById('point').addEventListener('click', function (e) {
    document.getElementById('display').innerText += '.';
})
document.getElementById('equal').addEventListener('click', function (e) {
    document.getElementById('display').innerText += '=';
})
document.getElementById('divide').addEventListener('click', function (e) {
    document.getElementById('display').innerText += '/';
})
document.getElementById('del').addEventListener('click', function (e) {
    display = document.getElementById('display');
    if (display == " ") {
        alert('Enter A Number')
    } else {
        del();
    }
})
document.getElementById('all-clear').addEventListener('click', function (e) {
    console.log('AC');
    allClear();
})


document.getElementById('display').innerHTML = '';

function addition(num1,num2) {
   addition = num1 + num2;
   return document.getElementById('display').innerHTML = addition;  
}

function subtraction(num1,num2) {
    subtraction = num1 - num2;
    return document.getElementById('display').innerHTML = subtraction;
}

function division(num1,num2) {
    division = num1 / num2;
    return document.getElementById('display').innerHTML = division;
}

function multiplication(num1, num2) {
    multiplication = num1 * num2;
    return document.getElementById('display').innerHTML = multiplication;
}

function allClear() {
    document.getElementById('display').innerHTML = "";
}

function del() {
    removeNumber =  document.getElementById('display').innerText.slice(0,-1);
    return document.getElementById('display').innerText = removeNumber;
}