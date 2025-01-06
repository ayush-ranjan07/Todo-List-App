const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
const filterAllBtn = document.getElementById('filter-all');
const filterActiveBtn = document.getElementById('filter-active');
const filterCompletedBtn = document.getElementById('filter-completed');

let tasks = loadTasksFromStorage();

function loadTasksFromStorage(){
    const taskFromStorage = JSON.parse(localStorage.getItem('tasks'));
    return taskFromStorage ? taskFromStorage : [];

}

