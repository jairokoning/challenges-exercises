/*
Exercise 5: Table
Create a program that receives a number from the user and displays the table of that
number, from 1 to 10.
*/

function table(number) {
  if (!Number.isInteger(number)) {
    return 'Value is not a number';
  }
  for (i = 1; i <= 10; i++) {
    const calcResult = number * i;
    console.log(`${number} * ${i} = ${calcResult}`);
  }
}

table(7);