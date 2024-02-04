const taskList = document.getElementById(`taskList`);
const taskInput = document.getElementById(`taskInput`);

function addTask() {
  if (taskInput.value !== ``) {
    // Task Item.
    const taskItem = document.createElement(`li`);
    taskItem.textContent = taskInput.value;

    // Delete Button.
    const deleteButton = document.createElement(`button`);
    deleteButton.textContent = `Delete`;
    deleteButton.className = `deleteButton`;

    // Remove Container On Delete.
    deleteButton.onclick = () => {
      taskItem.remove();
    };

    // Add Task And Delete Button To Container.
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    // Complete Task.
    taskItem.onclick = () => {
      taskItem.classList.toggle("completed");
    };

    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
}
