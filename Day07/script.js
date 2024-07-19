// Feature Request:
// 1. Book Object Script: Write a script that creates a book object, adds methods to it, and logs its properties and method results.

let book = {
  title: "life",
  author: "Kalpesh",
  year: 2024,
  updateYear(year) {
    this.year = year;
  },
  printObject() {
    console.log(book);
  },
};

function updateData(year) {
  book.printObject();
  book.updateYear(year);
  console.log(`After year update`);
  book.printObject();
}

updateData(2025);

// 2. Library Object Script: Create a script that defines a library object containing an array of book objects and logs the library's details.

let library = {
  libraryName: "Dombivli Library",
  books: [
    { title: "book1", author: "author1", year: 2021 },
    { title: "book2", author: "author2", year: 2022 },
    { title: "book3", author: "author3", year: 2023 },
    { title: "book4", author: "author4", year: 2024 },
  ],
};

function displayDetails(name) {
  console.log(`Library Name is ${name.libraryName}`);
  name.books.forEach((book) => console.log(`Author is ${book.author}, Title "${book.title}" published in ${book.year}`));
}

displayDetails(library);

// 3. Object Iteration Script: Write a script that demonstrates iterating over an object's properties using for..in loop and Object.keys / Object.values.

for (const property in book) {
  if (typeof book[property] !== `function`) {
    console.log(`${property} : ${book[property]}`);
  }
}

console.log(Object.keys(book));
console.log(Object.values(book));
