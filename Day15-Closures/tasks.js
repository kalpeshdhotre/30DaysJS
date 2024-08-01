// Day 15: Closures
// Tasks/Activities:

// Activity 1: Understanding Closures
// • Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
function myFn1() {
  let number = 99;
  function myFn2() {
    return number;
  }

  return myFn2;
}

const task1 = myFn1();
console.log(task1());

// • Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
function counter() {
  // let currentNumber = cntr;
  let totalCount = 0;
  function increment() {
    return (totalCount += 1);
  }
  return increment;
}

const Task2Counter = counter();
console.log(Task2Counter());
// Task2Counter(5);
console.log(Task2Counter());
console.log(Task2Counter());
console.log(Task2Counter());

// Activity 2: Practical Closures
// • Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
function generateID() {
  let uId = Math.floor(Math.random() * 900) + 100;
  function increment() {
    return uId++;
  }
  return increment;
}

const myId = generateID();
console.log(myId());
console.log(myId());
console.log(myId());
console.log(myId());

// • Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.
function captureName(uName) {
  function greet() {
    return `Hello ${uName}!!`;
  }
  return greet;
}

const task4 = captureName("Kalpesh");
console.log(task4());

// Activity 3: Closures in Loops
// • Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.

function task5() {
  let fnArray = [];
  function createArray() {
    for (let i = 0; i <= 5; i++) {
      fnArray.push(function () {
        return `Function ${i}`;
      });
    }
  }
  createArray();
  return fnArray;
}

let testTask5 = task5();

// console.log(testTask5[2]());
testTask5.forEach((fn) => console.log(fn()));

// Activity 4: Module Pattern
// • Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
function manageCollection() {
  let itemCollection = [];

  function addItem(item) {
    itemCollection.push(item);
  }
  function removeItem(item) {
    itemCollection = itemCollection.filter((i) => i !== item);
  }
  function listItems() {
    return itemCollection;
  }

  return {
    addItem,
    removeItem,
    listItems,
  };
}

const myItems = manageCollection();

myItems.addItem("item1");
myItems.addItem("item2");
myItems.addItem("item3");
myItems.addItem("item4");

console.log(myItems.listItems());
myItems.removeItem("item3");
console.log(myItems.listItems());

// Activity 5: Memoization
// • Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
function calCube(num) {
  return `Product of numbers are ${num * num * num}`;
}

function memoTask7(fn) {
  const cache = {};
  return function (n) {
    if (cache[n]) {
      return `Fetch from Cache:  ${cache[n]}`;
    }
    const result = fn(n);
    cache[n] = result;
    return `Calculated by function : ${result}`;
  };
}

const testMemo = memoTask7(calCube);

console.log(testMemo(4));
console.log(testMemo(4));

// • Task 8: Create a memoized version of a function that calculates the factorial of a number.
function factorial(num) {
  let factorial = 1;
  for (let i = num; i > 0; i--) {
    factorial *= i;
    console.log(factorial);
  }
  return factorial;
}
console.log(factorial(6));

const test8memo = memoTask7(factorial);
console.log(test8memo(4));
console.log(test8memo(4));
console.log(test8memo(5));
console.log(test8memo(4));

// Feature Request:
// 1. Basic Closure Script: Write a script that demonstrates a basic closure with a function returning another function that accesses the outer function's variable.
// 2. Counter Closure Script: Create a script that uses a closure to maintain a private counter with increment and get functions.
// 3. Unique ID Generator Script: Write a script that generates unique IDs using a closure to keep track of the last generated ID.
// 4. Loop Closure Script: Create a script that demonstrates closures in loops to ensure functions log the correct index.
// 5. Memoization Script: Write a script that memoizes the results of a function and demonstrates it with a factorial calculation.
