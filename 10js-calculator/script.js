function plusFunc() {
    let num1 = document.getElementById('firstNumb').value;
    num1 = parseInt(num1);
    let num2 = document.getElementById('secondNumb').value;
    num2 = parseInt(num2);

    result = num1 + num2;

    document.getElementById('out').innerHTML = result;
}

function minusFunc() {
    let num1 = document.getElementById('firstNumb').value;
    num1 = parseInt(num1);
    let num2 = document.getElementById('secondNumb').value;
    num2 = parseInt(num2);

    result = num1 - num2;

    document.getElementById('out').innerHTML = result;
}

function deleteFunc() {
    let num1 = document.getElementById('firstNumb').value;
    num1 = parseInt(num1);
    let num2 = document.getElementById('secondNumb').value;
    num2 = parseInt(num2);

    let message = 'На 0 делить нельзя';

    result = num1 / num2;

    if (num2 == 0) {
        document.getElementById('out').innerHTML = message;
    } else {
        document.getElementById('out').innerHTML = result;
    }
}

function multiplyFunc() {
    let num1 = document.getElementById('firstNumb').value;
    num1 = parseInt(num1);
    let num2 = document.getElementById('secondNumb').value;
    num2 = parseInt(num2);

    result = num1 * num2;

    document.getElementById('out').innerHTML = result;
}
