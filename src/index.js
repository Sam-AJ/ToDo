import './styles.css';
import { Todo, TodoList} from './classes';
import { createToDoHtml, pendings } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach(createToDoHtml);

pendings();