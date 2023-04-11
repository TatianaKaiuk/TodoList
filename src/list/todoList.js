import { newList } from './createTasks';
import { clickOnCheckbox } from './checkbox';
import { clickOnDeleteBtn } from './deleteTask';

export const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', newList);

  const listElem = document.querySelector('.list');
  listElem.addEventListener('click', clickOnCheckbox);

  const deleteTaskElem = document.querySelector('.list');
  deleteTaskElem.addEventListener('click', clickOnDeleteBtn);
};
