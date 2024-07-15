// Day 3: Control Structures
// Tasks/Activities:
// Activity 1: If-Else Statements
// • Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let numberToTest = 0;
if (numberToTest > 0) console.log(`positive`);
else if (numberToTest < 0) console.log(`negative`);
else console.log(`Zero`);

// • Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
let personAge = 1;
if (personAge >= 18) console.log("Person is eligible");
else console.log("Person is not eligible");

// Activity 2: Nested If-Else Statements
// • Task 3: Write a program to find the largest of three numbers using nested if-else statements.
let number1 = 2;
let number2 = 2;
let number3 = 4;

if (number1 > number2 && number1 > number3) {
  console.log(`Number 1 is largest Number`);
} else {
  if (number2 > number1 && number2 > number3) {
    console.log(`Number 2 is largest Number`);
  } else {
    console.log(`Number 3 is largest Number`);
  }
}

// Activity 3: Switch Case
// • Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let dayNumber = 7;
switch (dayNumber) {
  case 1:
    console.log(`Monday`);
    break;
  case 2:
    console.log(`Tueday`);
    break;
  case 3:
    console.log(`Wed`);
    break;
  case 4:
    console.log(`Thu`);
    break;
  case 5:
    console.log(`Fri`);
    break;
  case 6:
    console.log(`Sat`);
    break;
  case 7:
    console.log(`Sun`);
    break;
  default:
    console.log(`Wrong Day Number`);
    break;
}

// • Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F) based on a score and log the grade to the console.
let score = 90;

switch (true) {
  case score <= 100 && score >= 90:
    console.log("A");
    break;
  case score <= 89 && score >= 61:
    console.log("B");
    break;
  case score <= 60 && score >= 51:
    console.log("C");
    break;
  case score <= 50 && score >= 35:
    console.log("D");
    break;
  case score < 35:
    console.log("F");
    break;
  default:
    console.log("Wrong score");
    break;
}

// Activity 4: Conditional (Ternary) Operator
// • Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

let numberToCheck = "2";
numberToCheck % 2 === 0 ? console.log("Even") : console.log("Odd");

// Activity 5: Combining Conditions
// • Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
let yearToCheck = 2200;

if (yearToCheck % 4 == 0) {
  if (yearToCheck % 100 == 0) {
    if (yearToCheck % 400 == 0) {
      console.log("LEAP");
    } else {
      console.log("NOT LEAP");
    }
  } else {
    console.log("LEAP");
  }
} else {
  console.log("NOT LEAP");
}
