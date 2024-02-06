const taskList = document.getElementById(`taskList`);
const taskInput = document.getElementById(`taskInput`);
let editing = false;

function addTask() {
  if (taskInput.value !== ``) {
    // Task Item.
    const taskItem = document.createElement(`li`);
    taskItem.textContent = taskInput.value;

    // Button Container.
    const buttonContainer = document.createElement(`div`);
    buttonContainer.style.display = `flex`;
    buttonContainer.style.gap = `5px`;

    // Edit Input.
    const editInput = document.createElement(`input`);
    editInput.textContent = taskInput.textContent;

    // Edit Button.
    const editButton = document.createElement(`button`);
    editButton.textContent = `Edit`;
    editButton.className = `editButton`;

    // Delete Button.
    const deleteButton = document.createElement(`button`);
    deleteButton.textContent = `Delete`;
    deleteButton.className = `deleteButton`;

    // Save Button.
    const saveButton = document.createElement(`button`);
    saveButton.textContent = `Save`;
    saveButton.className = `saveButton`;

    // Remove Container On Delete.
    deleteButton.onclick = () => {
      taskItem.remove();
    };

    // Enable Edit View.
    editButton.onclick = () => {
      event.stopPropagation();
      editing = true;
      clearButtonContainer(buttonContainer);
      editInput.value = taskItem.textContent;
      taskItem.textContent = ``;
      buttonContainer.appendChild(saveButton);
      taskItem.appendChild(editInput);
      taskItem.appendChild(buttonContainer);
    };

    // Return To Original View.
    saveButton.onclick = () => {
      event.stopPropagation();
      editing = false;
      taskItem.textContent = editInput.value;
      clearButtonContainer(buttonContainer);
      buttonContainer.appendChild(editButton);
      buttonContainer.appendChild(deleteButton);
      taskItem.appendChild(buttonContainer);
    };

    // Complete Task.
    taskItem.onclick = () => {
      if (!editing) {
        taskItem.classList.toggle("completed");
      }
    };

    // Add Task And Delete Button To Container.
    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(deleteButton);
    taskItem.appendChild(buttonContainer); // Adding to li.
    taskList.appendChild(taskItem); // Adding to ul.

    // Clear Input.
    taskInput.value = "";
  }
}

function clearButtonContainer(buttonContainer) {
  const buttons = buttonContainer.querySelectorAll(`button`);
  buttons.forEach((button) => button.remove());
}
