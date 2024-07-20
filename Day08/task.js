// Day 8: ES6+ Features
// Tasks/Activities:

// Activity 1: Template Literals
// • Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
let personName = "Kalpesh";
let age = 43;
console.log(`Name is ${personName} and age is ${age}`);

// • Task 2: Create a multi-line string using template literals and log it to the console.
let multiLineString = `This is example of
multiline string`;

console.log(multiLineString);

// Activity 2: Destructuring
// • Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
let array = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const [first, second, ...rest] = array;
console.log(first);
console.log(second);

// • Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
let book = {
  title: "Stavik Movement",
  author: "Subh Saraf",
  year: 2024,
};
const { title, author, year } = book;
console.log(`Title is "${title}" and author is "${author}"`);

// =>> Activity 3: Spread and Rest Operators
//  Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
let originalArray = [1, 2, 3, 4, 5, 6];
const newArray = [...originalArray, 7, 8, 9, 0];
console.log(newArray);

// • Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(...numbers) {
  return numbers.reduce((total, x) => (total += x));
}
console.log(sum(1, 2, 3, 4, 5));

// =>> Activity 4: Default Parameters
// • Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function displayProduct(x, y = 1) {
  console.log(`Product of numbers : ${x * y}`);
}
displayProduct(3);

// =>> Activity 5: Enhanced Object Literals
// • Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
let studentName = "Kalpesh";
let studentAge = 20;

const student = {
  studentName,
  studentAge,
  displayDetails() {
    console.log(`Name: ${this.studentName} age: ${this.studentAge}`);
  },
};
console.log(student);
student.displayDetails();

// • Task 9: Create an object with computed property names based on variables and log the object to the console.
let property = "Brand";

const showroom = {
  [property]: "Kia",
  ["modelYear"]: 2023,
};
console.log(showroom);
