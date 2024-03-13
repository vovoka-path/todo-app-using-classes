import { Form } from './components/Form/Form';
import { Todos } from './components/Todos/Todos';

class App {
  constructor() {}

  render() {
    const rootElement = document.querySelector<HTMLDivElement>('#app');

    if (rootElement) {
      const form = new Form();
      form.render(rootElement);

      const todos = new Todos();
      todos.render(rootElement);
    }
  }
}

const app = new App();

export default app;
