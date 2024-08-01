// Feature Request:
// 1. Number Printing Script: Write a script that prints numbers from 1 to 10 using a for loop and a while loop.
function printToTen() {
  console.log(`With For Loop`);
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }

  console.log(`With While Loop`);
  let j = 1;
  while (j <= 10) {
    console.log(j);
    j++;
  }
}
printToTen();

// 2. Multiplication Table Script: Create a script that prints the multiplication table of 5 using a for loop.
function multiplicationFiveTable() {
  for (let i = 1; i <= 10; i++) {
    console.log(i * 5);
  }
}
multiplicationFiveTable();

// 3. Pattern Printing Script: Write a script that prints a pattern of stars using nested loops.
function printPattern(number) {
  let pattern = ``;
  for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= i; j++) {
      pattern += `*`;
    }
    console.log(pattern);
    pattern = ``;
  }
}
printPattern(5);

// 4. Sum Calculation Script: Write a script that calculates the sum of numbers from 1 to 10 using a while loop.
function calculateSumWhile() {
  let i = 1;
  let sum = 0;
  while (i <= 10) {
    sum += i;
    i++;
  }
  console.log(sum);
}

calculateSumWhile();

// 5. Factorial Calculation Script: Create a script that calculates the factorial of a number using a do...while loop.

function calculateFactorial(number) {
  let factorial = 1;
  do {
    factorial = factorial * number;
    number--;
  } while (number >= 1);
  console.log(factorial);
}

calculateFactorial(4);
