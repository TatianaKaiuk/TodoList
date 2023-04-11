import { renderTasks } from './render';
import { setItem } from './storage';
import { deleteTask, getTasksList } from './tasksGateway';

export const clickOnDeleteBtn = (e) => {
  const taskId = e.target.closest('.list-item__delete-btn').dataset.id;

  deleteTask(taskId)
    .then(getTasksList)
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);

      renderTasks();
    });
};
