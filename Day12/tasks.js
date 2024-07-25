// Day 12: Error Handling
// Tasks/Activities:

// Activity 1: Basic Error Handling with Try-Catch
// • Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
try {
  nonexistanant();
} catch (error) {
  console.log(`Code Stopped beacuse ${error}`);
}

// • Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
function task2(num1, num2) {
  try {
    if (num2 === 0) {
      throw new Error(`Denominator cannot be ZERO`);
    }
    result = num1 / num2;
    console.log(result);
  } catch (err) {
    console.log(`Error is ${err}`);
  }
}

task2(2, 0);

// Activity 2: Finally Block
// • Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
function task3(num1, num2) {
  try {
    if (num2 === 0) {
      throw new Error(`Divid by zero error`);
    }
    console.log(num1 / num2);
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log(`Execution completed succesfully`);
  }
}

task3(3, 2);

// Activity 3: Custom Error Objects
// • Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
class task4Error extends Error {
  constructor(message) {
    super(message);
    this.name = "customError";
  }
}

function task4(num1, num2) {
  try {
    if (num2 === 0) {
      throw new task4Error(`This is custom error`);
    }
    console.log(num1 / num2);
  } catch (error) {
    console.log(error.message);
  }
}

task4(3, 0);

// • Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.
class task5Error extends Error {
  constructor(message) {
    super(message);
    this.name = "myError";
  }
}

function task5(str) {
  try {
    if (!str) {
      throw new task5Error("This is custome Error - String empty");
    }
    console.log(`String passed to function is ${str}`);
  } catch (error) {
    console.log(error.message);
  }
}

task5("");

// Activity 4: Error Handling in Promises
// • Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.

const fnTask6 = (flag) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (flag) {
        resolve("True Value passed");
      } else {
        reject("False value passed");
      }
    }, 1000);
  });
};

fnTask6(false)
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });

// • Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

const fnTask7 = async (flg) => {
  try {
    await fnTask6(flg);
    console.log("Success");
  } catch (error) {
    console.log(error);
  }
};
let flag = false;

// Activity 5: Graceful Error Handling in Fetch
// • Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.
const url = `https://reqres.in/api/users/4`;

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("API not reachable");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("Error", err.message);
  });

// • Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

const task9 = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("API not reachable");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message, "Problem fetching API");
  }
};

task9(url);

// Feature Request:
// 1. Basic Error Handling Script       : Write a script that demonstrates basic error handling using try-catch and finally blocks.
// 2. Custom Error Script               : Create a script that defines and throws custom errors, handling them with try-catch blocks.
// 3. Promise Error Handling Script     : Write a script that handles errors in promises using .catch() and try-catch within async functions.
// 4. Fetch Error Handling Script       : Create a script that handles errors when using the fetch API to request data from invalid URLs.
