// Day 2: Operators
// Tasks/Activities:
// Activity 1: Arithmetic Operations
// • Task 1: Write a program to add two numbers and log the result to the console.
let number1 = 15;
let number2 = 4;
console.log(number1 + number2);
// • Task 2: Write a program to subtract two numbers and log the result to the console.
console.log(number1 - number2);
// • Task 3: Write a program to multiply two numbers and log the result to the console.
console.log(number1 * number2);
// • Task 4: Write a program to divide two numbers and log the result to the console.
console.log(number1 / number2);
// • Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
console.log(number1 % number2);

// Activity 2: Assignment Operators
// • Task 6: Use the += operator to add a number to a variable and log the result to the console.
console.log((number1 += 1));
// • Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
console.log((number2 -= 1));

// Activity 3: Comparison Operators
// • Task 8: Write a program to compare two numbers using > and < and log the result to the console.
if (number1 > number2) {
  console.log(`Number 1 is greater than number 2`);
}
// OR Below method without if statement
number1 > number2 ? console.log(`Number1 is greater than number2`) : console.log(`number2 is greater than number1`);

if (number1 < number2) {
  console.log(`Number 1 is less than number 2`);
}

// • Task 9: Write a program to compare two numbers using and <= and log the result to the console.
if (number1 <= number2) {
  console.log(`Number 1 is less or equal to number 2`);
}

// • Task 10: Write a program to compare two numbers using == and === and log the result to the console.
number1 = 4;
number2 = "4";
number1 == number2 ? console.log("equal") : console.log("Not Equal");
number1 === number2 ? console.log("Value and type equal") : console.log("Value and type Not Equal");

// Activity 4: Logical Operators
// • Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
number1 == number2 && number1 === number2 ? console.log(`Value and Type matched`) : null;

// • Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
number1 == number2 || number1 === number2 ? console.log(`Value or Type matched`) : null;

// • Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
number1 !== number2 ? console.log(`Not Equal`) : null;
!(number1 === number2) ? console.log(`Not Equal`) : null;

// Activity 5: Ternary Operator
// • Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
number1 = 1;
number1 > 0 ? console.log("Positive") : (number1<0?console.log("Negative"):console.log(`Zero`));



