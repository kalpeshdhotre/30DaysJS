// Day 6: Arrays
// Tasks/Activities:

// Activity 1 : Array Creation and Access
// • Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
let array = [1, 2, 3, 4, 5];
console.log(array);

// • Task 2: Access the first and last elements of the array and log them to the console.
console.log(array[0]);
console.log(array[4]);

// Activity 2: Array Methods (Basic)
// • Task 3: Use the push method to add a new number to the end of the array and log the updated array.
array.push(6);
console.log(array);

// • Task 4: Use the pop method to remove the last element from the array and log the updated array.
array.pop();
console.log(array);

// • Task 5: Use the shift method to remove the first element from the array and log the updated array.
array.shift();
console.log(array);

// • Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
array.unshift(1);
console.log(array);

// Activity 3: Array Methods (Intermediate)
// • Task 7: Use the map method to create a new array where each number is doubled and log the new array.
let arrayOriginal = [1, 2, 3, 4, 5, 6];
const arrayDoubled = arrayOriginal.map((x) => x * 2);
console.log(arrayDoubled);

// • Task 8. Use the filter method to create a new array with only even numbers and log the new array.
let arrayToFilter = [1, 2, 3, 4, 5, 6];
const filteredArray = arrayToFilter.filter((x) => x % 2 === 0);
console.log(filteredArray);

// • Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
let arrayForSum = [1, 2, 3, 4, 5];
console.log(arrayForSum.reduce((sum, x) => sum + x));

// Activity 4: Array Iteration
// • Task 10: Use a for loop to iterate over the array and log each element to the console.
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
// • Task 11: Use the foreach method to iterate over the array and log each element to the console.
let arrayForEach = [1, 2, 3, 4, 5, 6];
arrayForEach.forEach((x) => console.log(`Element is ${x}`));

// Activity 5: Multi-dimensional Arrays
// • Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
let arrayTwoDimentional = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < arrayTwoDimentional.length; i++) {
  let line = ``;
  for (let j = 0; j < arrayTwoDimentional[i].length; j++) {
    line += `${arrayTwoDimentional[i][j]} `;
    // console.log(arrayTwoDimentional[i][j]);
  }
  console.log(line);
}

// • Task 13: Access and log a specific element from the two-dimensional array.
let arrayColumn = 1;
let arrayRow = 1;
console.log(arrayTwoDimentional[arrayRow][arrayColumn]);
