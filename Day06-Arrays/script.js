// Feature Request:
// 1. Array Manipulation Script: Write a script that demonstrates the creation of an array, adding and removing elements using push , pop , shift and unshift methods.

let array = [1, 2, 3, 4, 5, 6, 7, 8];
array.push(6);
console.log(array);
array.pop();
console.log(array);
array.shift(6);
console.log(array);
array.unshift(1);
console.log(array);

// 2. Array Transformation Script: Create a script that uses map , filter , and reduce methods to transform and aggregate array data.

// map method - to add 10 to each element of array
const newArray = array.map((x) => x + 10);
console.log(newArray);
// filter mothod - to get all odd numbers from given array
const filteredArray = array.filter((x) => x % 2 !== 0);
console.log(filteredArray);
// reduce method - get sum of all components of array
const totalSum = array.reduce((sum, x) => (sum += x));
console.log(totalSum);

// 3. Array Iteration Script: Write a script that iterates over an array using both for loop and foreach method and logs each element.
let charArray = [`one`, `two`, `three`, `four`, `five`];
function iterateArray(array) {
  // iteration using for loop
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  // using foreach method
  array.forEach((x) => console.log(x));
}
iterateArray(charArray);

// 4. Two-dimensional Array Script: Create a script that demonstrates the creation and manipulation of a two-dimensional array.
let twoDimentionalArray = [
  [`a`, `b`, `c`],
  [`d`, `e`, `f`],
  [`g`, `h`, `i`],
  [`g`, `h`, `i`]
];

// print array
console.log(twoDimentionalArray);`
`
// access elements of array at 2nd rwo, 1st column 
console.log(twoDimentionalArray[2][1]);

// log entire rwo
console.log(twoDimentionalArray[2]);
console.log(twoDimentionalArray.length);



