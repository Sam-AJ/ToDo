import { Todo } from '../classes';
import { todoList } from '../index';

// HTML References
const divToDoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnDelete = document.querySelector('.clear-completed');
const ulFilters = document.querySelector('.filters');
const anchorFilters = document.querySelectorAll('.filtro');

export const createToDoHtml = (todo) => {
    const htmlToDo = `
        <li class="${(todo.completed) ? 'completed' : ''}" data-id="${todo.id}">
            <div class="view">
                <input class="toggle" type="checkbox" ${(todo.completed) ? 'checked' : ''}>
                <label>${todo.task}</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
        </li>`;

        const div = document.createElement('div');
        div.innerHTML = htmlToDo;

        divToDoList.append(div.firstElementChild);

        return div.firstElementChild;
}

// Events
txtInput.addEventListener('keyup', (event) => {
    if (event.keyCode === 13 && txtInput.value.length > 0) {
        console.log(txtInput.value);
        const newToDo = new Todo(txtInput.value);
        todoList.newTodo(newToDo)

        createToDoHtml(newToDo);
        txtInput.value = '';
    }
});

divToDoList.addEventListener('click', (event) => {
    const elementName = event.target.localName;
    const toDoElement = event.target.parentElement.parentElement;
    const toDoId = toDoElement.getAttribute('data-id')

    if (elementName.includes('input')) {
        todoList.markAsCompleted(toDoId);
        toDoElement.classList.toggle('completed');
    } else if (elementName.includes('button')) {
        todoList.deleteTodo(toDoId)
        divToDoList.removeChild(toDoElement);
    }
})

btnDelete.addEventListener('click', () => {
    todoList.deleteCompleted();
    
    for (let i = divToDoList.children.length - 1; i >= 0; i--) {
        const element = divToDoList.children[i]
        
        if (element.classList.contains('completed')) {
            divToDoList.removeChild(element);
        }
    }
});

ulFilters.addEventListener('click', (event) => {
    const filter = event.target.text;
    if (!filter) {return;}

    anchorFilters.forEach(elem => elem.classList.remove('selected'));
    event.target.classList.add('selected');

    for (const element of divToDoList.children) {
        element.classList.remove('hidden');
        const completed = element.classList.contains('completed');

        switch(filter) {
            case 'Pendientes':
                if (completed) {
                    element.classList.add('hidden');
                }
            break;

            case 'Completados':
                if (!completed) {
                    element.classList.add('hidden');
                }
            break;
        }
    }
});