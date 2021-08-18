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

const ul = document.querySelector('ul');
function ui() {
  for (let i = 0; i < tasks.length; i += 1) {
    const li = document.createElement('li');
    const lDiv = document.createElement('div');
    const lDivSpan = document.createElement('span');
    const rDiv = document.createElement('div');
    rDiv.classList.add('rdiv');
    const checkbox = document.createElement('input');
    const pTask = document.createElement('span');

    checkbox.type = 'checkbox';
    checkbox.name = 'task-box';
    checkbox.value = 'val';
    checkbox.id = 'task-box';
    checkbox.classList.add('ldiv-spn');

    pTask.innerHTML = `${tasks[i].description}`;

    li.appendChild(lDiv);

    lDiv.appendChild(lDivSpan);
    lDiv.appendChild(pTask);
    lDivSpan.appendChild(checkbox);

    li.appendChild(rDiv);
    rDiv.innerHTML = '<i class="fas fa-bars"></i>';

    ul.appendChild(li);
  }
}

ui();