export class Checkbox {
  element: HTMLInputElement;
  checked: boolean;

  constructor(checked: boolean) {
    this.element = document.createElement('input');
    this.checked = checked;
  }

  render(parentElement: HTMLElement) {
    this.element.setAttribute('type', 'checkbox');
    this.element.checked = this.checked || false;

    parentElement.append(this.element);
  }

  addListener(callback: () => void) {
    this.element?.addEventListener('click', callback);
  }
}
