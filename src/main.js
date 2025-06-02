import { refs } from './js/refs.js';
import { addTask, deleteTask, initTasks } from './js/tasks.js';
import { initTheme } from './js/theme-switcher.js';

initTasks();
initTheme();

refs.form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = refs.inputTitle.value.trim();
  const text = refs.inputText.value.trim();

  if (!title || !text) {
    alert('Будь ласка, заповніть обидва поля');
    return;
  }

  addTask(title, text);

  refs.form.reset();
});

refs.taskList.addEventListener('click', (e) => {
  if (e.target.classList.contains('task-list-item-btn')) {
    const taskItem = e.target.closest('.task-list-item');
    const taskId = taskItem.dataset.id;
    deleteTask(taskId);
  }
});