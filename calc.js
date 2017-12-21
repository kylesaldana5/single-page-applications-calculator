let inputOne = document.getElementById("input1");
let inputTwo = document.getElementById("input2");
let button = document.getElementById("buttonClicks");
let answer = document.getElementById("answer");



/* Create a function that multiplies two numbers
passed in as arguments. Return the product. */

function multiplies(num1, num2) {
    return num1 * num2;
}

/*Create a function that adds two numbers
passed in as arguments. Return the sum.*/

function addition(num1, num2) {
    return num1 +  num2;
}

/*Create a function that subtracts two numbers
  passed in as arguments. Return the difference.*/
function subtracts(num1, num2) {
    return num1 - num2;    
}

/*Create a function that divides two numbers
  passed in as arguments. Return the quotient.*/

function divides(num1, num2) {
    return num1 / num2;
}

/* Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation. */

  function calc(num1, num2, func) {
      return func(num1, num2);
  }


button.addEventListener("click", () => {
    let input = event.target.id;
    let operation;
    switch (input){
        case "add":
        operation = addition
        break;
        case "sub":
        operation = subtracts
        break;
        case "mult":
        operation = multiplies
        break;
        case "div":
        operation = divides
        break;
    }
    console.log(input);
    let result = calc(+inputOne.value, +inputTwo.value, operation);
    printTODOM(result);
})

function printTODOM(value) {
    answer.innerHTML = value;
}