
let taskDescription = document.querySelector('#txt-input');

const addToLocalStorage = () => {
    const storage = JSON.stringify(tasks);
    localStorage.setItem('lstore', storage);
  };

const getFromLocalStorage = () => {
    const storage = JSON.parse(localStorage.getItem('lstore')) || [];
    return storage;
  };

  const tasks = getFromLocalStorage();

  
const addToTasks = (e) => {
    e.preventDefault()
    tasks.push({
    description: taskDescription.value,
    completed: false,
    index: tasks.length
  })
  addToLocalStorage();
  window.location.reload();
  taskDescription.value = '';
  }

const editTasks = (editable, task) => {  
    editable.contentEditable = true;
    
    if (editable === document.activeElement) {
        editable.addEventListener('keydown', (e)=>{
            if(e.key === 'Enter') {
        task.description = editable.textContent;
        addToLocalStorage()
        editable.contentEditable = false;

        }
    })
  }
}

const deleteTask = (listId) => {
    let index = listId;
    tasks.splice(index, 1);
    localStorage.setItem("lstore",JSON.stringify(tasks))
    window.location.reload();
}

export { addToLocalStorage, getFromLocalStorage, addToTasks, editTasks, deleteTask, tasks };