/**
Exercise 2: Prime Numbers
Write a function that checks whether a number is prime or not. Then create 
a program that prints the first 10 prime numbers.
*/

function isPrimeNumber(number) {  
  let count = 0;
  for (i = number; i >= 1; i--) {
    const result = number / i;
    if (Number.isInteger(result)) {
      count++;
    }
    if (count > 2) {
      break;
    }
  }
  if (count > 2 || number === 1) {
    return false;
  } else {

    return true;
  }
}

function printPrimeNumbers() {  
  let countPrimeNumber = 0;
  let number = 1;
  while (countPrimeNumber < 10) {
    if (isPrimeNumber(number)) {
      console.log(number);
      countPrimeNumber++;
    }
    number++;
  }
}

printPrimeNumbers();