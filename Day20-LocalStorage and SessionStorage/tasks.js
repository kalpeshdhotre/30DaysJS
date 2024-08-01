// Day 20: LocalStorage and SessionStorage
// Tasks/Activities:

// Activity 1 : Understanding LocalStorage
// • Task 1: Write a script to save a string value to localstorage and retrieve it. Log the retrieved value.
localStorage.setItem("string", "Test");
myValue = localStorage.getItem("string");
console.log(myValue);

// • Task 2: Write a script to save an object to localstorage by converting it to a JSON string. Retrieve and parse the object, then log it.
let person = {
  name: "Kalpesh",
  country: "India",
  age: 43,
};

localStorage.setItem("objectPerson", JSON.stringify(person));
console.log(JSON.parse(localStorage.getItem("objectPerson")));

// Activity 2: Using LocalStorage
// • Task 3: Create a simple form that saves user input (e.g., name and email) to localstorage when submitted. Retrieve and display the saved data on page load.
// • Task 4: Write a script to remove an item from localstorage . Log the localstorage content before and after removal.

// Activity 3: Understanding SessionStorage
// • Task 5: Write a script to save a string value to sessionstorage and retrieve it. Log the retrieved value.
// • Task 6: Write a script to save an object to sessionstorage by converting it to a JSON string. Retrieve and parse the object, then log it.

// Activity 4: Using SessionStorage
// • Task 7: Create a simple form that saves user input (e.g., name and email) to sessionstorage when submitted. Retrieve and display the saved data on page load.
// • Task 8: Write a script to remove an item from sessionstorage . Log the sessionstorage content before and after removal.

// Activity 5: Comparing LocalStorage and SessionStorage
// • Task 9: Write a function that accepts a key and a value, and saves the value to both localstorage and sessionstorage . Retrieve and log the values from both storage mechanisms.
// • Task 10: Write a function that clears all data from both localstorage and sessionstorage . Verify that both storages are empty.

// Feature Request:
// 1. LocalStorage Script: Write a script that saves, retrieves, and removes items from localstorage , and displays the saved data on page load.
// 2. SessionStorage Script: Create a script that saves, retrieves, and removes items from sessionstorage , and displays the saved data on page load.
// 3. Storage Comparison Script: Write a script that saves data to both localstorage and sessionstorage , retrieves the data, and compares the results.
// 4. Clear Storage Script: Create a script that clears all data from both localstorage and sessionstorage , and verifies the operation.
