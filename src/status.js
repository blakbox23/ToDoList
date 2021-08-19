import { indexOf } from 'lodash';

const completedTasks = [];

const taskCompleted = task => {
  task.completed = true;
  completedTasks.push(task);
}

const taskNotComplete = task => {
  const i = indexOf(task);
  task.completed = false;
  completedTasks.splice(i, 1);
}

export { taskNotComplete, taskCompleted };