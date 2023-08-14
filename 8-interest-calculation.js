/*
Exercise 8: Interest Calculation
Create a function that calculates the final value of an investment based on initial capital,
interest rate, and investment time (in months). The program must prompt the user for these
values and display the final value.
*/

const readline = require("node:readline");

function calcInterest(initialCapital, interestRate, investmentTime) {
  let finalValueOfInvestiment = initialCapital;  
  for (time = 1; time <= investmentTime; time++) {
    finalValueOfInvestiment += finalValueOfInvestiment * (interestRate / 100);
  }
  return finalValueOfInvestiment.toFixed(2);
}

let initalCapital = 0;
let interestRate = 0;
let investmentTime = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


const question1 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Initial capital: ', (answer) => {
      initalCapital = answer;
      resolve()
    })
  })
}

const question2 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Interest rate: ', (answer) => {
      interestRate = answer;
      resolve()
    })
  })
}

const question3 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Investiment time (in months): ', (answer) => {
      investmentTime = answer;
      resolve()
    })
  })
}

const main = async () => {
  await question1()
  await question2()
  await question3()
  console.log(calcInterest(Number(initalCapital), Number(interestRate), Number(investmentTime)))
  rl.close()
}

main()


