export class Todo {
    static fromJson({ id, task, completed, created }) {
        const tempToDo = new Todo(task);

        tempToDo.id = id;
        tempToDo.completed = completed;
        tempToDo.created = created;

        return tempToDo;
    }

    constructor(task) {
        this.task = task
        this.id = new Date().getTime();
        this.completed = false;
        this.created = new Date();
    }
}