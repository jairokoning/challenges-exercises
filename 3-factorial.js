/**
Exercise 3: Factorial
Write a function to calculate the factorial of a number. Next, create 
a program that allows the user to enter a number and displays the corresponding factorial.
*/

function calcFactorial(n) {
  if (n === 0) return 1;
  let calcResult = n;
  for (i = n-1; i > 1; i--) {
    calcResult = calcResult * i;
  }
  return calcResult;
}

console.log(calcFactorial(5));