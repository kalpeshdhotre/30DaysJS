// Day 1 1: Promises and Async/Await
// Tasks/Activities:

// Activity 1: Understanding Promises
// • Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const promiseHello = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello - Promise Resolved");
  }, 2000);
});

promiseHello
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });

// • Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().
const isTeaReady = (teaStatus) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (teaStatus) {
        resolve("Tea is ready");
      } else {
        reject("Tea is not ready");
      }
    }, 2000);
  });
};

isTeaReady(true)
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });

// Activity 2: Chaining Promises
// • Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

const pr1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Promise 1 resolved");
      resolve("Promise 1 Done");
    }, 1000);
  });
};

const pr2 = (pr1Status) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(pr1Status + " and Promise 2 resolved");
      resolve("Promoise 2 Done");
    }, 1000);
  });
};

const pr3 = (pr2Status) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(pr2Status + " and Promise 3 Resolved");
      resolve("promise 3 resolved");
    }, 1000);
  });
};

pr1()
  .then((msgPr1) => pr2(msgPr1))
  .then((msgPr2) => pr3(msgPr2))
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log("Error:", err);
  });

// Activity 3: Using Async/Await
// • Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
const fnTask4 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolve of task 4");
    }, 2000);
  });
};

const fnT4 = async () => {
  try {
    const data = await fnTask4();
    console.log(data);
  } catch (error) {
    console.log("error", error);
  }
};
fnT4();

// • Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
const fnTask5 = (flag) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (flag) resolve("Task 5 resolved");
      else reject("Task not Completed");
    }, 1000);
  });
};

const fnTask5Check = async (flg) => {
  try {
    const task = await fnTask5(flg);
    console.log(task);
  } catch (error) {
    console.log("Error", error);
  }
};

fnTask5Check(false);

// Activity 4: Fetching Data from an API
// • Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
const url = `https://reqres.in/api/users/110`;

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Network Problem`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(`Error:`, error);
  });

// • Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.

const task7 = async (urlToFetch) => {
  try {
    const response = await fetch(urlToFetch);
    if (!response.ok) {
      throw Error(`Network problem`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(`Error is`, error);
  }
};

task7(`https://reqres.in/api/users/6`);

// Activity 5: Concurrent Promises
// • Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
let prTask8_1 = new promiseHello((resolve, reject) => {
  setTimeout(() => {
    resolve("First promise resolved");
  }, 1000);
});
let prTask8_2 = new promiseHello((resolve, reject) => {
  setTimeout(() => {
    resolve("First promise resolved");
  }, 2000);
});
let prTask8_3 = new promiseHello((resolve, reject) => {
  setTimeout(() => {
    resolve("First promise resolved");
  }, 3000);
});

async function promiseAll() {
  const result = await Promise.all([prTask8_1, prTask8_2, prTask8_3]);
  console.log(result);
}

promiseAll();

// • Task 9: Use `Promise.race` to log the value of the first promise that resolves among multiple promises.
let prTask9_1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("First promise resolved");
  }, 1000);
});
let prTask9_2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Second promise resolved");
  }, 2000);
});
let prTask9_3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Third promise resolved");
  }, 10000);
});
let prTask9_4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Forth promise resolved");
  }, 800);
});

async function promiseAll() {
  const result = await Promise.race([prTask9_1, prTask9_2, prTask9_3, prTask9_4]);
  console.log(result);
}

promiseAll();
// Feature Request:

// 1. Promise Creation Script : Write a script that demonstrates creating and handling promises, including both resolved and rejected states.
// 2. Promise Chaining Script : Create a script that chains multiple promises and logs messages in a specific sequence.
// 3. Async/Await Script : Write a script that uses async/await to handle promises and includes error handling with try-catch.
// 4. API Fetch Script : Create a script that fetches data from a public API using both promises and async/await, and logs the response data.
// 5. Concurrent Promises Script : Write a script that uses Promise. all and Promise. race to handle multiple promises concurrently and logs the results.
