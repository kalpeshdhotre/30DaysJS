// Feature Request:
// 1. Template Literals Script: Write a script that demonstrates the use of template literals to create and log strings with embedded variables and multi-line strings.
let personName = "Kalpesh";
let multiLineString = `This is multiline
string. print and check`;

console.log(`Person Name is ${personName} and this will print in 2 lines: ${multiLineString}`);

// 2. Destructuring Script: Create a script that uses array and object destructuring to extract values and log them.
let array = [1, 2, 3, 4, 5];
let car = {
  brand: "Honda",
  model: "Civic",
  year: 2024,
};

const [number1, number2, ...rest] = array;
console.log(number1, number2, rest);

const { brand, model, year } = car;
console.log(brand, model, year);

// 3. Spread and Rest Operators Script: Write a script that demonstrates the use of the spread operator to combine arrays and the rest operator to handle multiple function arguments.
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
const finalArray = [...array1, ...array2];
console.log(finalArray);

function multiAgrs(...numbers) {
  return numbers.reduce((total, x) => (total += x));
}
console.log(multiAgrs(3, 4, 5, 6, 7, 8, 9, 11, 22));

// 4. Default Parameters Script: Create a script that defines a function with default parameters and logs the results of calling it with different arguments.
function hello(name, age = 1) {
  console.log(`Hello ${name} your age is ${age === 1 ? "not Found" : age}`);
}
hello("Kalpesh", 43);
hello("Kalpita");

// 5. Enhanced Object Literals Script: Write a script that uses enhanced object literals to create and log an object with methods and computed property names.

let item = "books";

const catagory = {
  [item]: `name1`,
  ["displayall" + item]() {
    console.log(`${this[item]}`);
  },
};

catagory.displayallbooks();
