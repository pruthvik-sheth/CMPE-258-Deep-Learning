import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';
import { fetchTodos, createTodo, updateTodo, deleteTodo } from './api';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const data = await fetchTodos();
        setTodos(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load todos');
        setLoading(false);
      }
    };

    loadTodos();
  }, []);

  const handleAddTodo = async (text) => {
    try {
      const newTodo = await createTodo(text);
      setTodos([...todos, newTodo]);
    } catch (err) {
      setError('Failed to add todo');
    }
  };

  const handleToggleTodo = async (id) => {
    try {
      const todoToUpdate = todos.find(todo => todo.id === id);
      const updatedTodo = await updateTodo(id, {
        completed: !todoToUpdate.completed
      });
      
      setTodos(todos.map(todo => 
        todo.id === id ? updatedTodo : todo
      ));
    } catch (err) {
      setError('Failed to update todo');
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (err) {
      setError('Failed to delete todo');
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="app">
      <h1>Todo List</h1>
      {error && <div className="error">{error}</div>}
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList 
        todos={todos} 
        onToggleTodo={handleToggleTodo} 
        onDeleteTodo={handleDeleteTodo} 
      />
    </div>
  );
}

export default App;
