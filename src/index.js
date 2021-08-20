import { taskNotComplete, taskCompleted } from './status.js';
import './style.css';


let form = document.querySelector('#task-form');
let taskDescription = document.querySelector('#txt-input');

const addToTasks = (e) => {
  e.preventDefault()
  tasks.push({
  description: taskDescription.value,
  completed: false,
  index: 1
})
addToLocalStorage();
}

form.addEventListener('submit', addToTasks)


const getFromLocalStorage = () => {
  const storage = JSON.parse(localStorage.getItem('lstore')) || [];
  return storage;
};

const tasks = getFromLocalStorage();

const addToLocalStorage = () => {
  const storage = JSON.stringify(tasks);
  localStorage.setItem('lstore', storage);
};

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

