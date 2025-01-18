const addButton = document.getElementById('addTask');
const takeInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
loadTasks();

function addTask(){
const task = takeInput.value.trim();
if(task){
    createTaskElement(task);
    takeInput.value = "";
    saveTasks();
}
else{
    alert("Please enter the task!");
}
}
addButton.addEventListener('click', addTask);


function createTaskElement(task){
 const listItem = document.createElement('li');
 listItem.textContent = task;


 const deleteBtn = document.createElement('button');
 deleteBtn.textContent = 'Delete';
 deleteBtn.className = "deleteTask";
 listItem.appendChild(deleteBtn);
 taskList.appendChild(listItem);

 deleteBtn.addEventListener('click',function(){
    taskList.removeChild(listItem);
 });
}


function saveTasks(){
    let tasks = [];
    taskList.querySelectorAll('li').forEach(function(item){
        tasks.push(item.textContent.replace('Delete' ,'').trim());
    });
    localStorage.setItem('task',JSON.stringify(tasks))
}
function loadTasks(){
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(createTaskElement);
}