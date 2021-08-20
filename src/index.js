import './style.css';

import { taskNotComplete, taskCompleted } from './status.js';
import { addToLocalStorage, getFromLocalStorage, tasks, editTasks, addToTasks} from './crud.js';


let form = document.querySelector('#task-form');


form.addEventListener('submit', addToTasks)


const ul = document.querySelector('ul');

const ui = () => {
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

    pTask.addEventListener('click', ()=>{
      editTasks(pTask, tasks[i]);
    })


    if (tasks[i].completed === true) {
      pTask.innerText = `${tasks[i].description}`;
      pTask.classList.add('cancel');
      pTask.previousSibling.children[0].checked = true;
    } else {
      pTask.innerText = `${tasks[i].description}`;
    }

    checkbox.addEventListener('change', (e) => {
      if (e.target.checked) {
        taskCompleted(tasks[i]);
        e.target.parentElement.nextSibling.classList.add('cancel');
        addToLocalStorage();
      } else {
        taskNotComplete(tasks[i]);
        e.target.parentElement.nextSibling.classList.remove('cancel');
        addToLocalStorage();
      }
    });


   

  }
};

ui();

