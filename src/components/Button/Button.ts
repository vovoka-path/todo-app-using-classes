export class Button {
  title: string;
  element: HTMLButtonElement;
  constructor(title: string) {
    this.element = document.createElement('button');
    this.title = title;
  }

  render(parentElement: HTMLElement) {
    this.element.innerText = this.title;
    this.element.classList.add('button');

    parentElement.append(this.element);
  }

  addListener(callback: () => void) {
    this.element?.addEventListener('click', callback);
  }
}
