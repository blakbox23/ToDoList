
let taskDescription = document.querySelector('#txt-input');
const deleteAllBtn = document.querySelector('.clear-all');

deleteAllBtn.addEventListener('click', ()=>{
    deleteAllCompleted();
})



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

const deleteAllCompleted = () =>{
  let uncompleted = [];
  for (let i=0; i<tasks.length; i++){
      if(tasks[i].completed === false){
          uncompleted.push(tasks[i])
      }
  }
  console.log(uncompleted)
  localStorage.setItem("lstore",JSON.stringify(uncompleted))
  getFromLocalStorage() 
  window.location.reload();
}



export { addToLocalStorage, getFromLocalStorage, addToTasks, editTasks, deleteTask, tasks };