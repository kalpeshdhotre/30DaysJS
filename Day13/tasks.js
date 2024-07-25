// Day 13: Modules
// Tasks/Activities:

// Activity 1: Creating and Exporting Modules
// • Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.

// import { addNumbers, person } from "./module.js";
// console.log(addNumbers(3, 4));

// • Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

// console.log(person);

// Activity 2: Named and Default Exports
// • Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
// import checkEvenNumber, { addNumbers, multiplyNumbers, combineString } from "./module.js";

// console.log(checkEvenNumber(3));
// console.log(addNumbers(3, 4));
// console.log(multiplyNumbers(4, 4));
// console.log(combineString(`Kal`, `pita`));

// • Task 4: Create a module that exports a single function using default export. Import and use this function in another script.
// import checkEvenNumber from "./module.js";
// console.log(checkEvenNumber(4));

// Activity 3: Importing Entire Modules
// • Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
// import checkEvenNumber, * as task5Obj from "./module.js";

// console.log(task5Obj.challengeName);
// console.log(task5Obj.addNumbers(3, 4));
// console.log(task5Obj.combineString(`Java`, `Script`));
// console.log(checkEvenNumber(9));

// Activity 4: Using Third-Party Modules
// • Task 6: Install a third-party module (e.g., Iodash ) using npm. Import and use a function from this module in a script.
// var _ = require("lodash");
// import _ from "lodash";

// console.log(_.isNumber("qw"));
// console.log(_.isNumber(2));

// • Task 7: Install a third-party module (e.g., axios ) using npm. Import and use this module to make a network request in a script.
import axios from "axios";
axios.get("https://reqres.in/api/users/6").then(function (response) {
  console.log(response);
});

// Activity 5: Module Bundling (Optional)
// • Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.

// Feature Request:
// 1. Basic Module Script: Write a script that creates a module exporting a function and imports it in another script.
// 2. Named and Default Exports Script: Create a script demonstrating both named and default exports and their usage.
// 3. Third-Party Module Script: Write a script that installs, imports, and uses functions from third-party modules like Iodash and axios.
// 4. Module Bundling Script: Create a script demonstrating how to bundle JavaScript files using a module bundler (optional).
