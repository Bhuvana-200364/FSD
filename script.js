function addTask() {
    var taskInput = document.getElementById('task-input');
    var taskList = document.getElementById('task-list');
  
    if (taskInput.value) {
      var taskItem = document.createElement('li');
      taskItem.className = 'task-item';
  
      var taskText = document.createElement('span');
      taskText.textContent = taskInput.value;
  
      var editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.addEventListener('click', function() {
        editTask(taskItem);
      });
  
      var deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', function() {
        deleteTask(taskItem);
      });
  
      taskItem.appendChild(taskText);
      taskItem.appendChild(editButton);
      taskItem.appendChild(deleteButton);
  
      taskList.appendChild(taskItem);
  
      taskInput.value = '';
    }
  }
  
  
  function editTask(taskItem) {
    var newTaskText = prompt('Enter the updated task:');
    if (newTaskText) {
      taskItem.firstChild.textContent = newTaskText;
    }
  }
  
  
  function deleteTask(taskItem) {
    if (confirm('Are you sure you want to delete this task?')) {
      taskItem.parentNode.removeChild(taskItem);
    }
  }
  

  document.getElementById('add-task-btn').addEventListener('click', addTask);