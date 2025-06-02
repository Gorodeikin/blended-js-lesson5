export function createTaskMarkup({ id, title, text }) {
    const li = document.createElement('li');
    li.classList.add('task-list-item');
    li.dataset.id = id;

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('task-list-item-btn');
    deleteBtn.textContent = 'Delete';

    const h3 = document.createElement('h3');
    h3.textContent = title;

    const p = document.createElement('p');
    p.textContent = text;

    li.append(deleteBtn, h3, p);
    return li;
}