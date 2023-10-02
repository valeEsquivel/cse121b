/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(num1, num2) {
    return +num1 + +num2;
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);

    document.querySelector("#sum").value = add(addNumber1, addNumber2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(num1, num2) {
    return num1 - num2;
}

let subtractNumbers = function () {
    let subtractNumber1 = Number(document.querySelector("#subtract1").value);
    let subtractNumber2 = Number(document.querySelector("#subtract2").value);

    document.querySelector("#difference").value = subtract(subtractNumber1, subtractNumber2);
}

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
let multiply = (num1, num2) => num1 * num2;

let multiplyNumbers = () => {
    let factor1 = Number(document.querySelector("#factor1").value);
    let factor2 = Number(document.querySelector("#factor2").value);

    document.querySelector("#product").value = multiply(factor1, factor2);
}

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(num1, num2) {
    return num1 / num2;
}

let divideNumbers = () => {
    let dividend = Number(document.querySelector("#dividend").value);
    let divisor = Number(document.querySelector("#divisor").value);

    document.querySelector("#quotient").value = divide(dividend, divisor);
}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
let currentDate = new Date();
let currentYear;

// Using the variable declared in number 1, call the built-in getFullYear() method/function and assign it to the variable declared in 2.
currentYear = currentDate.getFullYear();

document.querySelector("#year").textContent = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector("#array").textContent = numbersArray;

/* Output Odds Only Array */
let oddNumbersArray = numbersArray.filter(number => number % 2 !== 0);
document.querySelector("#odds").innerHTML = oddNumbersArray;

/* Output Evens Only Array */
let evenNumbersArray = numbersArray.filter(number => number % 2 === 0);
document.querySelector("#evens").innerHTML = evenNumbersArray;

/* Output Sum of Org. Array */
let sum = numbersArray.reduce((accum, number) => accum + number);
document.querySelector("#sumOfArray").innerHTML = sum;

/* Output Multiplied by 2 Array */
let multipliedByTwoArray = numbersArray.map(number => number * 2);
document.querySelector("#multiplied").innerHTML = multipliedByTwoArray;

/* Output Sum of Multiplied by 2 Array */
let sumOfMultipliedByTwoArray = multipliedByTwoArray.reduce((accum, number) => accum + number);
document.querySelector("#sumOfMultiplied").innerHTML = sumOfMultipliedByTwoArray;


// Section 2
let calculateTotal = () => {
    let subtotal = document.querySelector("#subtotal").value;
    let clubDiscount = document.querySelector("#member").checked;
    let total;

    if (clubDiscount) {
        total = subtotal * 0.9;
    } else {
        total = subtotal;
    }

    document.querySelector("#total").innerHTML = '$' + total;
}

document.querySelector("#getTotal").addEventListener("click", calculateTotal);
