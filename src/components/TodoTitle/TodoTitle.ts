export class TodoTitle {
  element: HTMLElement;
  text: string;

  constructor(text: string) {
    this.element = document.createElement('span');
    this.text = text;
  }

  render(parentElement: HTMLElement) {
    this.element.innerHTML = this.text;
    this.element.classList.add('todo-title');

    parentElement.append(this.element);
  }
}
