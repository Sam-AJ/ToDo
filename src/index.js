import './styles.css';
import { Todo, TodoList} from './classes';
import { createToDoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach(createToDoHtml);

console.log(todoList.todos);
