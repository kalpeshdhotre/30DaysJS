// Feature Request:
// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.
let myNumber = 1;
let myString = "abcd";
let myBoolean = true;
let myObject = {
  fName: "Kalpesh",
  age: 20,
};
let myArray = [2, 3, 4, 5];

console.log(`
	Type of myNumber is : ${typeof myNumber} and Value is - ${myNumber}\n
	Type of myString is : ${typeof myString} and Value is - ${myString}\n
	Type of myBoolean is : ${typeof myBoolean} and Value is - ${myBoolean}\n
	Type of myObject is : ${typeof myObject} and Value is - ${JSON.stringify(myObject)}\n
	Type of myArray is : ${typeof myArray} and Value is - ${myArray}
	`);

// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.

let firstName = "Kalpesh";
console.log(firstName);
firstName = "Kalpita";
console.log(firstName);

const pi = 3.14;
console.log(pi);
pi = 4;
console.log(pi);
