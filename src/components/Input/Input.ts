export class Input {
  element: HTMLInputElement;
  constructor() {
    this.element = document.createElement('input');
  }

  render(parentElement: HTMLElement) {
    this.element.setAttribute('placeholder', 'Enter your task here...');
    this.element.classList.add('input');

    parentElement.append(this.element);
  }
}
