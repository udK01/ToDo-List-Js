const taskList = document.getElementById(`taskList`);
const taskInput = document.getElementById(`taskInput`);

function addTask() {
  if (taskInput.value !== ``) {
    const taskItem = document.createElement(`li`);
    const taskText = document.createTextNode(taskInput.value);
    taskItem.appendChild(taskText);
    taskItem.onclick = function () {
      this.classList.toggle("completed");
    };
    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
}
