import { indexOf } from 'lodash';

const completedTasks = [];
function taskCompleted(task) {
  task.completed = true;
  completedTasks.push(task);
}

function taskNotComplete(task) {
  const i = indexOf(task);
  task.completed = false;
  completedTasks.splice(i, 1);
}

export { taskNotComplete, taskCompleted };