//  Day 9: DOM Manipulation
//  Tasks/Activities:

// Activity 1: Selecting and Manipulating Elements
// • Task 1: Select an HTML element by its ID and change its text content.
function changeTextByID() {
  const elem = document.getElementById("hello");
  elem.textContent = "text is changed by ID";
}
// • Task 2: Select an HTML element by its class and change its background color.
function changeTextbyClass() {
  const elemClass = document.getElementsByClassName("greet");
  for (let i = 0; i < elemClass.length; i++) {
    elemClass[i].textContent = "Text is changed by Class";
  }
  console.log(elemClass.length);
}

// Activity 2: Creating and Appending Elements
// • Task 3: Create a new div element with some text content and append it to the body.
function addNewDiv() {
  let div = document.createElement("div");
  div.append("some text");
  document.body.appendChild(div);
}

// • Task 4: Create a new 1i element and add it to an existing ul list.
function addNewElement() {
  let list = document.getElementById("ulList");
  let newItem = document.createElement("li");
  newItem.append("New list Item");
  list.append(newItem);
}
// Activity 3: Removing Elements
// • Task 5: Select an HTML element and remove it from the DOM.
function deleteUl() {
  ulToDelete = document.getElementById("ulList");
  ulToDelete.remove();
}
// • Task 6: Remove the last child of a specific HTML element.
function deleteLastChild() {
  childToDelete = document.getElementById("ulList");
  childToDelete.removeChild(childToDelete.lastElementChild);
}

// Activity 4: Modifying Attributes and Classes
// • Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag)
function changeImage() {
  document.getElementById("image").src = "./img/image2.jpg";
}
// • Task 8: Add and remove a CSS class to/from an HTML element.
function addCssClass() {
  element = document.getElementById("ulList");
  element.setAttribute("class", "greet");
}
function removeCssClass() {
  element = document.getElementById("ulList");
  element.classList.remove("greet");
}

// Activity 5: Event Handling
// • Task 9: Add a click event listener to a button that changes the text content of a paragraph.
const changeParaTextButton = document.getElementById("changePara");
changeParaTextButton.addEventListener("click", () => {
  para = document.getElementById("para");
  para.textContent = "Contents changed as per request";
});

// • Task 10: Add a mouseover event listener to an element that changes its border color.
const image = document.getElementById("image");
image.addEventListener("mouseover", () => {
  // image.style.borderColor = "red";
  image.style.border = "2px solid red";
});
image.addEventListener("mouseleave", () => {
  // image.style.borderColor = "red";
  image.style.border = "";
});

// Feature Request:
// 1. Text Content Manipulation Script  : Write a script that selects an HTML element by its ID and changes its text content.

// 2. Element Creation Script           : Create a script that demonstrates creating a new div element and appending it to the body.

// 3. Element Removal Script            : Write a script that selects an HTML element and removes it from the DOM.

// 4. Attribute Modification Script     : Create a script that changes the attributes of an HTML element.

// 5. Event Handling Script             : Write a script that adds event listeners to HTML elements to change their content or style based on user interactions.
