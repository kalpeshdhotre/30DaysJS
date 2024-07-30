// Day 18: Algorithms
// Tasks/Activities:

// Activity 1 : Sorting Algorithms
// • Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
let arrayToSort = [8, 3, 5, 9, 2, 7, 1, 6, 4];
function bubbleSort(array) {
  for (let j = array.length; j > 0; j--) {
    for (let i = 0; i < j - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  }
  console.log(array);
}

// bubbleSort(arrayToSort);

// • Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function selectionSort(array) {
  let tempIndex;
  let tempSwap;
  for (let i = 0; i < array.length - 1; i++) {
    // Assume the minimum is at the current position
    tempIndex = i;

    // Find the index of the minimum element in the unsorted portion
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[tempIndex]) {
        tempIndex = j;
      }
    }

    // Swap the found minimum element with the element at the current position
    if (tempIndex !== i) {
      tempSwap = array[tempIndex];
      array[tempIndex] = array[i];
      array[i] = tempSwap;
    }
  }

  console.log(array);
}

// const arrayToSort = [64, 25, 12, 22, 11];
// selectionSort(arrayToSort);

// • Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function quicksort(array) {
  if (array.length <= 1) {
    return array;
  }

  // Choose a pivot (for simplicity, we'll use the last element)
  const pivot = array[array.length - 1];
  const left = [];
  const right = [];

  // Partition the array into left and right subarrays
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  // Recursively apply quicksort to the left and right subarrays, then combine
  return [...quicksort(left), pivot, ...quicksort(right)];
}

// Example usage
// const arrayToSort = [3, 6, 8, 10, 1, 2, 1];
// const sortedArray = quicksort(arrayToSort);
// console.log(sortedArray);

// Activity 2: Searching Algorithms
// • Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.
function linearSearch(element, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return `found at ${i}`;
    }
  }
  return `not found`;
}

console.log(linearSearch(5, arrayToSort));

// • Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.
function binarySearch(array, target) {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (array[mid] === target) {
      return `found at ${mid}`;
    } else if (array[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return "not found";
}

// Example usage
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(sortedArray, 8)); // Output: found at 4
console.log(binarySearch(sortedArray, 11)); // Output: not found

// Activity 3: String Algorithms
// • Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.
function countCharacterOccurrences(str) {
  const charCount = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char]) {
      charCount[char] += 1;
    } else {
      charCount[char] = 1;
    }
  }

  return charCount;
}

const result = countCharacterOccurrences("abcdabcdbcsdsf");
console.log(result);

// • Task 7. Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.
function lengthOfLongestSubstring(s) {
  let start = 0;
  let maxLength = 0;
  const charSet = new Set();

  for (let end = 0; end < s.length; end++) {
    while (charSet.has(s[end])) {
      charSet.delete(s[start]);
      start++;
    }
    charSet.add(s[end]);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

// Example usage
const inputString = "abcdabcd";
console.log(lengthOfLongestSubstring(inputString)); // Output: 3

// Activity 4: Array Algorithms
// • Task 8: Write a function to rotate an array by k positions. Log the rotated array.
function rotateArray(arr, k) {
  const n = arr.length;
  // Split the array into two parts and then concatenate them
  const part1 = arr.slice(-k); // Last k elements
  const part2 = arr.slice(0, n - k); // First n - k elements
  // Concatenate part1 and part2 to get the rotated array
  const rotatedArray = part1.concat(part2);
  console.log(rotatedArray);
}

// Example usage
const arrayToRotate = [1, 2, 3, 4, 5, 6, 7];
rotateArray(arrayToRotate, 5);

// • Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.
function mergeSortedArrays(arr1, arr2) {
  const mergedArray = [];
  let i = 0; // Pointer for arr1
  let j = 0; // Pointer for arr2

  // Compare elements from both arrays and merge them
  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  console.log(mergedArray);
}

const sortedArray1 = [1, 3, 5, 7];
const sortedArray2 = [2, 4, 6, 8];
mergeSortedArrays(sortedArray1, sortedArray2);

// Activity 5: Dynamic Programming (Optional)
// • Task 10: Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers.
// • Task 11: Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained.

// Feature Request:
// 1. Sorting Algorithm Script: Write a script that implements bubble sort, selection sort, and quicksort algorithms to sort arrays.
// 2. Searching Algorithm Script: Create a script that implements linear search and binary search algorithms to find values in arrays.
// 3. String Algorithm Script: Write a script that counts character occurrences and finds the longest substring without repeating characters.
// 4. Array Algorithm Script: Create a script that rotates arrays and merges sorted arrays.
// 5. Dynamic Programming Script: Write a script that solves the Fibonacci sequence and knapsack problem using dynamic programming (optional).
