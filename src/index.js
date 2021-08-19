import { indexOf } from 'lodash';
import './style.css';
// const tasks = [
//   {
//     description: 'Complete list structure',
//     completed: false,
//     index: 1,
//   },
//   {
//     description: 'Complete interactive list task',
//     completed: false,
//     index: 2,
//   },
//   {
//     description: 'Work on adding and removing tasks',
//     completed: false,
//     index: 3,
//   },
// ];

 
 const tasks = getFromLocalStorage();

const completedTasks = [];


const ul = document.querySelector('ul');
function ui() {
  for (let i = 0; i < tasks.length; i += 1) {
    const li = document.createElement('li');
    const lDiv = document.createElement('div');
    lDiv.classList.add('ldiv');
    const lDivSpan = document.createElement('span');
    lDivSpan.classList.add('ldiv-spn');
    const rDiv = document.createElement('div');
    rDiv.classList.add('rdiv');
    const pTask = document.createElement('span');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'task-box';
    checkbox.value = `${tasks[i]}`;
    checkbox.classList.add('chkbx');

 

    li.appendChild(lDiv);

    lDiv.appendChild(lDivSpan);
    lDiv.appendChild(pTask);
    lDivSpan.appendChild(checkbox);

    li.appendChild(rDiv);
    rDiv.innerHTML = '<i class="fas fa-bars"></i>';

    ul.appendChild(li);

    if(tasks[i].completed == true){
      pTask.innerText = `${tasks[i].description}`;
      pTask.classList.add('cancel');
      console.log( pTask.previousSibling.children[0])
      pTask.previousSibling.children[0].checked = true;
      
    }else{
      pTask.innerText = `${tasks[i].description}`;
    }

    
    checkbox.addEventListener('change', (e) => {
      if (e.target.checked) {
        taskCompleted(tasks[i]);
        e.target.parentElement.nextSibling.classList.add('cancel');
      } else {
        taskNotComplete(tasks[i]);
        e.target.parentElement.nextSibling.classList.remove('cancel');


      }
    });

  }

}

function taskCompleted(task){
  task.completed = true;
  completedTasks.push(task);
  // console.log(completedTasks)
  // console.log(tasks);
  addToLocalStorage()

}

function taskNotComplete(task){
  let i = indexOf(task);
  task.completed = false;
  completedTasks.splice(i, 1);
  // console.log(completedTasks)
  // console.log(tasks);
  addToLocalStorage()
}

function addToLocalStorage(){
const storage = JSON.stringify(tasks);
localStorage.setItem('lstore', storage);
}

function getFromLocalStorage(){
  const storage = JSON.parse(localStorage.getItem('lstore')) || tasks;
  return storage;
}

// document.addEventListener('DOMContentLoaded', () => {
//   const tasks = getFromLocalStorage();
//   for(let i=0; i<fromStorage.length; i++){
//     if(fromStorage[i].completed == true){
      
//     }
//   }
// })

ui();





