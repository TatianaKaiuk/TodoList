import { renderTasks } from './render';
import { setItem } from './storage';
import { createTask, getTasksList } from './tasksGateway';

export function newList() {
  const inputElem = document.querySelector('.task-input');
  const text = inputElem.value;

  if (!text) {
    return;
  }
  inputElem.value = '';

  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
  };
  // console.log(newTask);

  createTask(newTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
}
