import { Todo } from '../Todo/Todo';
import todoStore, { CallbackKeys, ITodo } from '../../store/TodoStore';

export class Todos {
  element: HTMLElement;
  constructor() {
    this.element = document.createElement('ul');
  }

  render(parentElement: HTMLElement) {
    const todos = todoStore.get();

    todos.map((todoData) => {
      const todo = new Todo(todoData);
      todo.render(this.element);
    });

    todoStore.addCallback(CallbackKeys.AddTodo, (todoData) => {
      this.addTodo(todoData);
    });

    parentElement.append(this.element);
  }

  addTodo(todoData: ITodo) {
    const todo = new Todo(todoData);
    todo.render(this.element);
  }
}
