import { Input } from './../Input/Input';
import { Button } from '../Button/Button';
import todoStore from '../../store/TodoStore';

export class Form {
  input: Input;
  button: Button;
  constructor() {
    this.input = new Input();
    this.button = new Button('Click me');
  }

  render(rootElement: HTMLElement) {
    this.input.render(rootElement);

    this.button.render(rootElement);
    this.button.addListener(() => this.addTodo(this.input));
  }

  addTodo(input: Input) {
    const newTodo = {
      id: Date.now().toString(),
      text: input.element.value,
      checked: false,
    };

    todoStore.add(newTodo);

    input.element.value = '';
  }
}
