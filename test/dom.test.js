import NewToDos from '../src/modules/display.js';

describe('DOM Utilities', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
  });

  test('Renders todo item', () => {
    const todo = { index: 1, details: 'Test DOM', completed: false };
    NewToDos.displayTask(container, todo);
    
    expect(container.querySelector('.input_task').value).toBe('Test DOM');
    expect(container.querySelector('.checkbox_task').checked).toBe(false);
  });
});