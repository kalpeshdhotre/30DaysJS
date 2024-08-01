// Day 7: Objects // Tasks/Activities:
// Activity 1: Object Creation and Access

// • Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
let book = {
  title: "Satvik Movement",
  author: "Subha Saraf",
  year: 2024,
};
console.log(book);

// • Task 2: Access and log the title and author properties of the book object.
const title = book.title;
console.log(title);
const author = book.author;
console.log(author);

// Activity 2: Object Methods
// • Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
// • Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

let bookWithMethod = {
  title: "Satvik Movement",
  author: "Subha Saraf",
  year: 2024,
  getInfo() {
    console.log(`Title of Book is ${this.title} and author is ${this.author}`);
  },
  updateYear(year) {
    this.year = year;
    console.log(`Year is updated to ${this.year}`);
  },
};
bookWithMethod.getInfo();
bookWithMethod.updateYear(2023);

// Activity 3: Nested Objects
// • Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
let library = {
  name: `Dombivli library`,
  books: [
    {
      title: `satvik movement`,
      author: `subha`,
      year: 2024,
    },
    {
      title: `satvik movement1`,
      author: `subha2`,
      year: 2024,
    },
  ],
  displayBookList() {
    this.books.forEach((x) => console.log(`Title is ${x.title} of ${x.year}`));
  },
};
console.log(library);

// • Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log(`Name of the library is ${library.name}`);
library.books.forEach((x) => console.log(x.title));
// library.books.map((x)=>console.log(x.year));

// Activity 4: The this Keyword
// • Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
library.displayBookList();

// Activity 5: Object Iteration
// • Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
for (const property in book) {
  console.log(`${property} - ${book[property]}`);
}

// for (const book of library.books) {
//   for(const key in book){
//     console.log(`${key} is ${book[key]}`);
//   }
// }

// • Task 9: Use object.keys and object.values methods to log all the keys and values of the book object.
console.log(Object.keys(book));
console.log(Object.values(book));

