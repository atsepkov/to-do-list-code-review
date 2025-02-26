import ToDos from '../src/modules/todos.js';

describe('ToDos Class', () => {
  let todos;

  beforeEach(() => {
    localStorage.clear();
    todos = new ToDos();
  });

  test('Adds new todo', () => {
    const todo = todos.addTodo('Test task');
    expect(todo.details).toBe('Test task');
    expect(todo.completed).toBe(false);
    expect(todos.getTodos()).toHaveLength(1);
  });

  test('Deletes todo', () => {
    const todo = todos.addTodo('Delete me');
    expect(todos.getTodos()).toHaveLength(1);
    todos.deleteTodo(todo.index);
    expect(todos.getTodos()).toHaveLength(0);
  });

  test('Toggles completion status', () => {
    const todo = todos.addTodo('Toggle me');
    expect(todo.completed).toBe(false);
    todos.updateStatus(todo.index, true);
    expect(todo.completed).toBe(true);
  });

  test('Clears completed todos', () => {
    todos.addTodo('Clear me', true);
    todos.addTodo('Don\'t clear me');
    todos.clearCompleted();
    expect(todos.getTodos()).toHaveLength(1);
  });

  test('Local storage persistence', () => {
    todos.addTodo('Persist me');
    const newTodos = new ToDos();
    expect(newTodos.getTodos()).toHaveLength(1);

    localStorage.clear();
    const emptyTodos = new ToDos();
    expect(emptyTodos.getTodos()).toHaveLength(0);
  });
});