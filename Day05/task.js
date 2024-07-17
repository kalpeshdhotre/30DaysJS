// Day 5: Functions
// Tasks/Activities:
// Activity 1: Function Declaration
// • Task 1: Write a function to check if a number is even or odd and log the result to the console.
function checkNumber(number) {
  if (number % 2 === 0) console.log(`Given Number is Even`);
  else console.log(`Given Number is Odd`);
}
checkNumber(2);

// • Task 2: Write a function to calculate the square of a number and return the result.
function calculateSqaure(number) {
  return number * number;
}
console.log(calculateSqaure(5));

// Activity 2: Function Expression
// • Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
const findMax = function (a, b) {
  if (a > b) return a;
  else return b;
};
console.log(findMax(12, 23));

// • Task 4: Write a function expression to concatenate two strings and return the result.
const concatString = function (str1, str2) {
  return str1 + str2;
};
console.log(concatString(`Kalpesh`, `Dhotre`));

// Activity 3: Arrow Functions
// • Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const calculateSum = (a, b) => {
  return a + b;
};
console.log(calculateSum(3, 4));

// • Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const checkString = (str, char) => {
  if (char === ``) return false;
  return str.includes(char) ? true : false;
};
console.log(checkString(`kalpesh`, `e`));

// Activity 4: Function Parameters and Default Values
// • Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function returnProduct(number1, number2 = 100) {
  return number1 * number2;
}
console.log(returnProduct(4));

// • Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
function greeting(name, age = 0) {
  return `Hello ${name}, Your age reported is ${age}`;
}

console.log(greeting(`Kalpesh`, 43));

// Activity 5: Higher-Order Functions
// • Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

function sayHello() {
  console.log(`Hej`);
}

function functionHOF(functionToCall, number = 1) {
  for (let i = 1; i <= number; i++) {
    functionToCall();
  }
}

functionHOF(sayHello, 2);

// • Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

function first(name) {
  // console.log(`Hello ${name}`);
  return `Hello ${name}`;
}

function second(string) {
  // console.log(`${string}, how are you?`);
  return `${string}, how are you?`;
}

function functionHOF2(fn1, fn2, str) {
  return fn1(fn2(str));
}

console.log(functionHOF2(first, second, `Kalpesh`));
