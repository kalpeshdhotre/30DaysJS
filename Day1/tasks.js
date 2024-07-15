// Day 1 Of 30 Days Of JavaScript challenge

// Activity 1: Variable Declaration
// Task 1: Declare a variable using var , assign it a number, and log the value to the console.
var day = 1;
console.log(day);
// Task 2: Declare a variable using let , assign it a string, and log the value to the console.
let challengeName = "30DaysJS from ChaiAurCode";
console.log(challengeName);

// Activity 2: Constant Declaration
// Task 3:Declare a variable using const , assign it a boolean value, and log the value to the console.
const isComplete = 0;
console.log(isComplete);

// Activity 3: Data Types
// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
let myNumber = 1;
let myString = "abcd";
let myBoolean = true;
let myObject = {
  fName: "Kalpesh",
  age: 20,
};
let myArray = [2, 3, 4, 5];

console.log(`type of myNumber is : ${typeof myNumber},\n
Type of myString is : ${typeof myString},\n
Type of myBoolean is : ${typeof myBoolean},\n
Type of myObject is : ${typeof myObject},\n
Type of myArray is : ${typeof myArray},`);

// Activity 4: Reassigning Variables
// Task 5: Declare a variable using let , assign it an initial value, reassign a new value, and log both values to the console.
let task5 = "reassign";
console.log(task5);
task5 = "new value";
console.log(task5);

// Activity 5: Understanding const
// Task 6 Try reassigning a variable declared with const and observe the error.
const pi = 3.41;
pi = 3.444;
