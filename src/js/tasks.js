import { saveTasks, loadTasks } from './local-storage-api.js';
import { renderTasks, addTaskToDOM, removeTaskFromDOM } from './render-tasks.js';

let tasks = loadTasks();

export function getTasks() {
    return tasks;
}

export function addTask(title, text) {
    const newTask = {
        id: Date.now().toString(),
        title,
        text,
    };
    tasks.push(newTask);
    saveTasks(tasks);
    addTaskToDOM(newTask);
}

export function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks(tasks);
    removeTaskFromDOM(id);
}

export function initTasks() {
    renderTasks(tasks);
}
