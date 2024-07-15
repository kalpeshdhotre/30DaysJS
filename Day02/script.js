// Feature Request:
// 1. Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.
let number1 = 20;
let number2 = 2;

console.log(`
   Addition of two numbers is ${number1 + number2}
   Substraction of two numbers is ${number1 - number2}
   Multiplication of two numbers is ${number1 * number2}
   Division of two numbers is ${number1 / number2}
   Remainder of two numbers is ${number1 % number2}
   `);

// 2. Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.

console.log(number1 > number2 ? "number1 is greater than number2" : null);
console.log(number1 < number2 ? "number1 is less than number2" : null);
console.log(number1 <= number2 ? "number1 is less than or Equal to number2" : null);
console.log(number1 >= number2 ? "number1 is greater than or Equal to number2" : null);
console.log(number1 == number2 ? "number1 and Number 2 are equal in value" : null);
console.log(number1 === number2 ? "number1 and number 2 are equal in value and type" : null);

// 3. Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.
number1 = -10;
console.log(number1 > 0 ? "Number is Positive" : number1 < 0 ? "Number is negative" : "Number is Zero");
