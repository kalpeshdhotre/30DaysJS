// Day 14: Classes
// Tasks/Activities:

// Activity 1: Class Definition
// • Task 1: Define a class Person with properties name and age , and a method to return a greeting message. Create an instance of the class and log the greeting message.
class Person {
  constructor(name, lastName, age, balance) {
    this.name = name;
    this.age = age;
    this.lastName = lastName;
  }

  greet() {
    console.log(`Hi from ${this.name}, my age is ${this.age}`);
  }
  updateAge(age) {
    this.age = age;
    console.log(`Age updated : ${age}`);
  }
  static greetFromClass() {
    console.log(`Hello from world of JS Class`);
  }

  // getter method to display full name
  get displayName() {
    return `${this.name} ${this.lastName}`;
  }

  set updateFullName({ fName, lName }) {
    this.name = fName;
    this.lastName = lName;
    return `Updated Name: ${this.name} ${this.lastName}`;
  }
}

const helloPerson = new Person("kalpesh", 43);
helloPerson.greet();

// • Task 2: Add a method to the Person class that updates the age property and logs the updated age.

helloPerson.updateAge(34);

// Activity 2: Class Inheritance
// • Task 3: Define a class student that extends the Person class. Add a property studentld and a method to return the student ID. Create an instance of the student class and log the student
class Student extends Person {
  static studentCount = 0;
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
    Student.studentCount++;
    console.log(`Total Number of students : ${Student.studentCount}`);
  }
  printStudentId() {
    console.log(`Student ID of ${this.name} is ${this.studentId}`);
  }
  greet() {
    console.log(`Hello from ${this.name} and my student is ${this.studentId}`);
  }
  static checkStudentCount() {
    console.log(this.studentCount);
  }
}

const newStudent = new Student("kalpesh", 43, 2212004);
const newStudent2 = new Student("kalpesh", 43, 2212004);
const newStudent3 = new Student("kalpesh", 43, 2212004);

newStudent.printStudentId();

// • Task 4: Override the greeting method in the student class to include the student ID in the message. Log the overridden greeting message.
newStudent.greet();

// Activity 3: Static Methods and Properties
// • Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
Person.greetFromClass();

// • Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
Student.checkStudentCount();

// Activity 4: Getters and Setters
// • Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.
const task7Person = new Person("Kalpesh", "Dhotre", 43);
console.log("Task 7:" + task7Person.displayName);

// • Task 8: Add a setter method to the Person class to update the name properties ( firstName and lastName ). Update the name using the setter and log the updated full name.
// console.log(`Task8 ${task7Person.updateFullName({ fName: "Kshiprra", lName: "Kalpita" })}`);
task7Person.updateFullName = { fName: "Kshiprra", lName: "Kalpita" };
console.log("Task 7:" + task7Person.displayName);

// Activity 5: Private Fields (Optional)
// • Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

class Account {
  #balance;
  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  get balance() {
    return this.#balance;
  }

  deposite(bal) {
    this.#balance += bal;
  }
  whitdraw(amt) {
    this.#balance -= amt;
  }
}

// • Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.
const task9Account = new Account(3000);
console.log(task9Account.balance);
task9Account.deposite(500);
console.log(task9Account.balance);
task9Account.whitdraw(3000);
console.log(task9Account.balance);

// Feature Request:
// 1. Basic Class Script: Write a script that defines a Person class with properties and methods, creates instances, and logs messages.
// 2. Class Inheritance Script: Create a script that defines a student class extending Person , overrides methods, and logs the results.
// 3. Static Methods and Properties Script: Write a script that demonstrates static methods and properties in classes.
// 4. Getters and Setters Script: Create a script that uses getters and setters in a class.
// 5. Private Fields Script: Write a script that defines a class with private fields and methods to manipulate these fields (optional).
