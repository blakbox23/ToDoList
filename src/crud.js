const taskDescription = document.querySelector('#txt-input');
const deleteAllBtn = document.querySelector('.clear-all');

const getFromLocalStorage = () => {
  const storage = JSON.parse(localStorage.getItem('lstore')) || [];
  return storage;
};

const tasks = getFromLocalStorage();

const addToLocalStorage = () => {
  const storage = JSON.stringify(tasks);
  localStorage.setItem('lstore', storage);
};

const addToTasks = (e) => {
  e.preventDefault();
  tasks.push({
    description: taskDescription.value,
    completed: false,
    index: tasks.length,
  });
  addToLocalStorage();
  window.location.reload();
  taskDescription.value = '';
};

const editTasks = (editable, task) => {
  editable.contentEditable = true;

  if (editable === document.activeElement) {
    editable.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        task.description = editable.textContent;
        addToLocalStorage();
        editable.contentEditable = false;
      }
    });
  }
};

const deleteTask = (listId) => {
  const index = listId;
  tasks.splice(index, 1);
  localStorage.setItem('lstore', JSON.stringify(tasks));
  window.location.reload();
};

const deleteAllCompleted = () => {
  const uncompleted = [];
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].completed === false) {
      uncompleted.push(tasks[i]);
    }
  }
  localStorage.setItem('lstore', JSON.stringify(uncompleted));
  getFromLocalStorage();
  window.location.reload();
};

deleteAllBtn.addEventListener('click', () => {
  deleteAllCompleted();
});

export {
  addToLocalStorage, getFromLocalStorage, addToTasks, editTasks, deleteTask, tasks,
};