// Feature Request:
// 1. Even or Odd Function Script: Write a script that includes a function to check if a number is even or odd and logs the result.
function checkNumber(number) {
  if (number % 2 === 0) console.log("Even");
  else console.log("ODD");
}
checkNumber(3);

// 2. Square Calculation Function Script: Create a script that includes a function to calculate the square of a number and returns the result.
function calculateSqaure(number) {
  return number * number;
}
console.log(calculateSqaure(5));

// 3. Concatenation Function Script: Write a script that includes a function expression to concatenate two strings and returns the result.
const concatStr = function (str1, str2) {
  return str1 + str2;
};
console.log(concatStr(`kal`, `pesh`));

// 4. Sum Calculation Arrow Function Script: Create a script that includes an arrow function to calculate the sum of two numbers and returns the result.
const calculateSum = (a, b) => {
  return a + b;
};
console.log(calculateSum(3, 4));

// 5. Higher-Order Function Script: Write a script that includes a higher-order function to apply a given function multiple times.
function sayHello() {
  console.log("Hello");
}

function exeFunction(fn, noOfTimes) {
  for (let i = 1; i <= noOfTimes; i++) {
    fn();
  }
}

exeFunction(sayHello, 5);
