import { indexOf } from 'lodash';
import './style.css';
const tasks = [
  {
    description: 'Complete list structure',
    completed: false,
    index: 1,
  },
  {
    description: 'Complete interactive list task',
    completed: false,
    index: 2,
  },
  {
    description: 'Work on adding and removing tasks',
    completed: false,
    index: 3,
  },
];

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


    pTask.innerText = `${tasks[i].description}`;

    li.appendChild(lDiv);

    lDiv.appendChild(lDivSpan);
    lDiv.appendChild(pTask);
    lDivSpan.appendChild(checkbox);

    li.appendChild(rDiv);
    rDiv.innerHTML = '<i class="fas fa-bars"></i>';

    ul.appendChild(li);

    
    checkbox.addEventListener('change', (e) => {
      if (e.target.checked) {
        taskCompleted(tasks[i]);
        check();

      } else {
        taskNotComplete(tasks[i]);

      }
    });

  }

}

function taskCompleted(task){
  task.completed = true;
  completedTasks.push(task);
  // console.log(completedTasks)
  // console.log(tasks);

}

function taskNotComplete(task){
  let i = indexOf(task);
  task.completed = false;
  completedTasks.splice(i, 1);
  // console.log(completedTasks)
  // console.log(tasks);
}

ui();



