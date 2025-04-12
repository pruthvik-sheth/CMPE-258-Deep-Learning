import React from 'react';

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        className="todo-checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id, todo.completed)}
      />
      <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
        {todo.title}
      </span>
      <button 
        className="todo-delete"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
