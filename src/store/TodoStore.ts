export interface ITodo {
  id: string;
  text: string;
  checked: boolean;
}

export interface ICallback {
  (todo: ITodo): void;
}

export enum CallbackKeys {
  AddTodo = 'addTodo',
}

type ICallbacks = {
  [key in CallbackKeys]?: ICallback;
};

const STORAGE_KEY = 'todos';

class TodoStore {
  callbacks: ICallbacks;
  constructor() {
    this.callbacks = {};
  }

  add(todoData: ITodo) {
    const todosData = this.get();

    todosData.push(todoData);

    if (this.callbacks[CallbackKeys.AddTodo]) {
      this.callbacks[CallbackKeys.AddTodo](todoData);
    }

    this.set(todosData);
  }

  remove(id: string) {
    const todosData = this.get();

    const filteredTodosData = todosData.filter(
      (todoData) => todoData.id !== id
    );

    this.set(filteredTodosData);
  }

  toggle(id: string) {
    const todosData = this.get();

    todosData.forEach((todoData) => {
      if (todoData.id === id) {
        todoData.checked = !todoData.checked;
      }
    });

    this.set(todosData);
  }

  addCallback(key: CallbackKeys, callback: ICallback) {
    this.callbacks[key] = callback;
  }

  get(): ITodo[] {
    const dataFromStorage = localStorage.getItem(STORAGE_KEY);

    if (dataFromStorage) {
      const todosData = JSON.parse(dataFromStorage);

      if (Array.isArray(todosData)) {
        return todosData;
      }
    }

    return [];
  }

  private set(todosData: ITodo[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todosData));
  }
}

const todoStore = new TodoStore();

export default todoStore;
