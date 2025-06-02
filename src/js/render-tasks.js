import { refs } from './refs.js';
import { createTaskMarkup } from './markup-tasks.js';

export function renderTasks(tasks) {
    refs.taskList.innerHTML = '';
    tasks.forEach(task => {
        const taskElement = createTaskMarkup(task);
        refs.taskList.appendChild(taskElement);
    });
}

export function addTaskToDOM(task) {
    const taskElement = createTaskMarkup(task);
    refs.taskList.appendChild(taskElement);
}

export function removeTaskFromDOM(taskId) {
    const taskElement = refs.taskList.querySelector(`[data-id="${taskId}"]`);
    if (taskElement) {
        taskElement.remove();
    }
}