const taskForm = document.getElementById("taskForm");
const taskTitle = document.getElementById("taskTitle");
const taskDescription = document.getElementById("taskDescription");
const dueDate = document.getElementById("dueDate");
const btnAddTask = document.getElementById("btnAddTask");
const taskTableBody = document.getElementById("taskTableBody");

const allTasks = [];
let isEditMode = false;
let editIndex = -1;
taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (taskForm.checkValidity()) {
    if (isEditMode) {
      // Edit existing task
      allTasks[editIndex] = {
        title: taskTitle.value,
        description: taskDescription.value,
        dueDate: dueDate.value,
      };
      // Reset edit mode
      isEditMode = false;
      editIndex = -1;
    } else {
      // Add new task
      allTasks.push({
        title: taskTitle.value,
        description: taskDescription.value,
        dueDate: dueDate.value,
      });
    }
  } else {
    alert("Enter All details");
  }
  console.log(allTasks);
  addTasksTolist();
  // Optionally, clear the input fields
  taskTitle.value = "";
  taskDescription.value = "";
  dueDate.value = "";
});

function addTasksTolist() {
  taskTableBody.innerHTML = "";

  for (let i = 0; i < allTasks.length; i++) {
    const row = document.createElement("tr");

    // task.className = "list";
    row.innerHTML = `
    <td>${allTasks[i].title}</td>
    <td>${allTasks[i].description}</td>
    <td>${allTasks[i].dueDate}</td>
    <td>
    <button class="btn btn-edit" data-index="${i}">Edit</button>
    <button class="btn btn-delete" data-index="${i}">Delete</button>
    </td>
    `;
    // console.log(task);

    taskTableBody.appendChild(row);
  }

  taskTitle.value = "";
  taskDescription.value = "";
  dueDate.value = "";
  // add event handler to all edit and delete buttons
  runEditDeleteEventListner();
}

function runEditDeleteEventListner() {
  const editButtons = document.querySelectorAll(".btn-edit");
  const deleteButtons = document.querySelectorAll(".btn-delete");

  editButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const index = button.getAttribute("data-index");
      editTask(index);
    });
  });

  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const index = button.getAttribute("data-index");
      deleteTask(index);
    });
  });
}

function deleteTask(index) {
  allTasks.splice(index, 1);
  addTasksTolist(); // Re-render the task list after deletion
}

function editTask(index) {
  // Implement edit functionality based on the index
  // For example, you can open a modal or populate form fields for editing
  console.log("Editing task at index:", index);
  taskTitle.value = allTasks[index].title;
  taskDescription.value = allTasks[index].description;
  dueDate.value = allTasks[index].dueDate;
  btnAddTask.textContent = "Save";
  isEditMode = true;
  editIndex = index;
}
