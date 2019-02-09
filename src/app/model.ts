export class Model {
  user;
  items;
  constructor() {
    this.user = 'Noel';
    this.items = [
      new ToDoItem('Placeholder', false)
    ];
  }
}

export class ToDoItem {
  action;
  done;
  constructor(action, done) {
    this.action = action;
    this.done = done;
  }
}
