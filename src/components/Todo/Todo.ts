import { Checkbox } from '../Checkbox/Checkbox';
import { TodoTitle } from '../TodoTitle/TodoTitle';
import { Button } from '../Button/Button';
import { ITodo } from '../../store/TodoStore';
import todoStore from '../../store/TodoStore';


export class Todo {
  element: HTMLElement;
  todoData: ITodo;
  constructor(todoData: ITodo) {
    this.element = document.createElement('li');
    this.todoData = todoData;
  }

  render(parentElement: HTMLElement) {
    this.element.setAttribute('id', this.todoData.id);

    const checkbox = new Checkbox(this.todoData.checked);
    checkbox.render(this.element);
    checkbox.addListener(() => this.toggle(checkbox));

    const todoTitle = new TodoTitle(this.todoData.text);
    todoTitle.render(this.element);

    const button = new Button('Delete');
    button.render(this.element);
    button.addListener(() => this.remove());
 
    parentElement.append(this.element);
  }

  remove() {
    todoStore.remove(this.todoData.id);
    this.element.remove();
  }

  toggle(checkbox: Checkbox) {
    todoStore.toggle(this.todoData.id);
    this.todoData.checked = !this.todoData.checked;
    checkbox.checked = this.todoData.checked;
  }
}
