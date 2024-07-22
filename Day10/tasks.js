// Day 10: Event Handling
// Tasks/Activities:

// Activity 1: Basic Event Handling
// • Task 1: Add a click event listener to a button that changes the text content of a paragraph.
let elem = document.getElementById("btnTask1");
elem.addEventListener("click", () => {
  let para = document.querySelector("#divTask1 p");
  para.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, cupiditate? <br>Eaque, voluptatem illum? Maxime ipsa cupiditate itaque iste nihil eius?<br>Ea nam quis fugit tempora officiis consequuntur, libero temporibus eum.`;
});

// • Task 2: Add a double-click event listener to an image that toggles its visibility.
let task2elem = document.getElementById("imgTask2");
task2elem.addEventListener("dblclick", () => {
  task2elem.style.opacity === "0" ? (task2elem.style.opacity = "1") : (task2elem.style.opacity = "0");
});

// Activity 2: Mouse Events
// • Task 3: Add a mouseover event listener to an element that changes its background color.
let task3elem = document.getElementById("inputTask3");
task3elem.addEventListener("mouseover", () => {
  task3elem.style.backgroundColor = "#CD5C5C";
});

// • Task 4: Add a mouseout event listener to an element that resets its background color.
task3elem.addEventListener("mouseleave", () => {
  task3elem.style.backgroundColor = "#F7DC6F";
});

// Activity 3: Keyboard Events
// • Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
let task5elem = document.getElementById("inputTask5");
task5elem.addEventListener("keydown", () => {
  console.log(task5elem.value);
});

// • Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
let paraTask5 = document.getElementById("paraTask5");
task5elem.addEventListener("keyup", () => {
  paraTask5.innerHTML = task5elem.value;
  console.log("Hello");
});

// Activity 4: Form Events
// • Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
let task7Elem = document.getElementById("formTask7");
task7Elem.addEventListener("submit", (event) => {
  let content = document.querySelector("#formTask7 input");
  console.log(content.value);
  content.value = "";
  event.preventDefault();
});

// • Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
let elemTask8 = document.getElementById("dropDownTask8");
elemTask8.addEventListener("change", () => {
  document.getElementById("paraTask8").innerHTML = elemTask8.options[elemTask8.selectedIndex].value;
  console.log(elemTask8.options[elemTask8.selectedIndex].value);
});

// Activity 5: Event Delegation
// • Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
let ulElemTask9 = document.getElementById("ulTask9");
ulElemTask9.addEventListener("click", (event) => {
  console.log(event.target.innerHTML);
});

// • Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
btnTask9 = document.getElementById("btnTask9");
btnTask9.addEventListener("click", () => {
  let newItem = document.createElement("li");
  newItem.textContent = `Item ${ulElemTask9.childElementCount + 1}`;
  newItem.className = "li";
  ulElemTask9.appendChild(newItem);
});

// Feature Request:
// 1. Click Event Script        : Write a script that adds a click event listener to a button to change the text content of a paragraph.
// task 1

// 2. Mouse Events Script       : Create a script that handles mouseover and mouseout events to change the background color of an element.
// Task 2, 3 & 4

// 3. Keyboard Events Script    : Write a script that logs key presses and displays input field values using keydown and keyup event listeners.
// Task 5  & 6

// 4. Form Events Script        : Create a script that handles form submission and change events on a select dropdown.
//  Task 7 & 8

// 5. Event Delegation Script   : Write a script that demonstrates event delegation by handling events on dynamically added child elements.
// Task 9 & 10
