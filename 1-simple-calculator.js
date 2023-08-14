/**
Exercise 1: Simple Calculator
Create a calculator that takes two numbers and an operator (+, -, *, /) and 
returns the result of the operation.
 */



const operators = ['+','-','*','/'];

function calcOperation({firstNumber, secondNumber, operator}) {
  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    return ('Argument firsNumber or secondNumber is NOT A NUMBER');
  }
  if (!operators.includes(operator)) {
    return ('Operator not allowed');
  }
  let calcResult = 0;
  switch (operator) {
    case '+':
      calcResult = Number(firstNumber) + Number(secondNumber);
      break;
    case '-':
      calcResult = Number(firstNumber) - Number(secondNumber);
      break;
    case '*':
      calcResult = Number(firstNumber) * Number(secondNumber);
      break;
    case "/":
      calcResult = Number(firstNumber) / Number(secondNumber);
      break;
    default:
      break;
  }
  return `${firstNumber} ${operator} ${secondNumber} = ${calcResult}`
}

const operationResult = calcOperation({ firstNumber: 5, secondNumber: 10, operator: '+' });

console.log(operationResult);