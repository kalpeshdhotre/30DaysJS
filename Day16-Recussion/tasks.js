// Day 16: Recursion
// Tasks/Activities:

// Activity 1: Basic Recursion
// • Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
function calRecursive(n) {
  if (n === 1) {
    return 1;
  }
  return n * calRecursive(n - 1);
}
console.log(calRecursive(5));

// • Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.
function recursiveFib(n) {
  if (n <= 1) {
    return n;
  }
  return recursiveFib(n - 1) + recursiveFib(n - 2);
}
console.log(recursiveFib(10));

// Activity 2: Recursion with Arrays
// • Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.

let arrayToSum = [10, 10, 10, 20];
function sumArray(array) {
  let sum = array[0];
  if (array.length === 0) {
    return 0;
  }
  array.shift();

  console.log(array);

  return sum + sumArray(array);
}

console.log(sumArray(arrayToSum));

// • Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
let arrayTask4 = [2, 30, 4, 5];
function highestElement(array) {
  if (array.length === 1) {
    return array[0];
  }

  const maxEle = highestElement(array.splice(1));

  return array[0] > maxEle ? array[0] : maxEle;
}

console.log(highestElement(arrayTask4));

// Activity 3: String Manipulation with Recursion
// • Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.
function revString(string) {
  if (string.length <= 1) {
    return string;
  }
  return revString(string.slice(1)) + string[0];
}

// • Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.
function checkForPalindrom(str) {
  if (str.length <= 1) {
    return true;
  }

  if (str[0] !== str[str.length - 1]) {
    return false;
  }

  return checkForPalindrom(str.slice(1, -1));
}

console.log(checkForPalindrom("kalpesh"));
console.log(checkForPalindrom("madam"));
console.log(checkForPalindrom("radar"));

// Activity 4: Recursive Search
// • Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
function recursiveBinarySearch(arr, target, left, right) {
  if (left > right) {
    return -1;
  }
  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid;
  }
  if (arr[mid] < target) {
    return recursiveBinarySearch(arr, target, left, mid - 1);
  }
  return recursiveBinarySearch(arr, target, left, mid - 1);
}

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 5;
const postion = recursiveBinarySearch(sortedArray, target, 0, sortedArray.length - 1);
console.log(postion);

// • Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.
function countOccurances(arr, target) {
  if (arr.length === 0) {
    return 0;
  }
  let count = arr[0] === target ? 1 : 0;
  return count + countOccurances(arr.slice(1), target);
}

task8Array = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 7, 7, 5, 6, 5, 6, 0];
console.log(countOccurances(task8Array, 6));

// Activity 5: Tree Traversal (Optional)
// • Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.
// • Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.

// Feature Request:
// 1. Factorial and Fibonacci Script: Write a script that includes recursive functions to calculate the factorial and Fibonacci numbers.
// 2. Array Recursion Script: Create a script that includes recursive functions to find the sum and maximum element of an array.
// 3. String Recursion Script: Write a script that includes recursive functions to reverse a string and check if a string is a palindrome.
// 4. Recursive Search Script: Create a script that includes recursive functions for binary search and counting occurrences in an array.
// 5. Tree Traversal Script: Write a script that includes recursive functions for in-order traversal and depth calculation of a binary tree (optional).
