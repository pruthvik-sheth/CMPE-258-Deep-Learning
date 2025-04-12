import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = "http://localhost:5000/api/todos";

  // Fetch todos from the backend
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(API_URL);
        setTodos(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching todos:", err);
        setError("Failed to fetch todos. Please try again later.");
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  // Add a new todo
  const addTodo = async (text) => {
    try {
      const response = await axios.post(API_URL, { text });
      setTodos([...todos, response.data]);
    } catch (err) {
      console.error("Error adding todo:", err);
      setError("Failed to add todo. Please try again.");
    }
  };

  // Toggle todo completion status
  const toggleComplete = async (id) => {
    try {
      const todoToUpdate = todos.find((todo) => todo.id === id);
      const response = await axios.put(`${API_URL}/${id}`, {
        completed: !todoToUpdate.completed,
      });

      setTodos(todos.map((todo) => (todo.id === id ? response.data : todo)));
    } catch (err) {
      console.error("Error updating todo:", err);
      setError("Failed to update todo. Please try again.");
    }
  };

  // Delete a todo
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (err) {
      console.error("Error deleting todo:", err);
      setError("Failed to delete todo. Please try again.");
    }
  };

  return (
    <div className="App">
      <div className="todo-container">
        <h1>Todo List</h1>

        <TodoForm addTodo={addTodo} />

        {error && <div className="error-message">{error}</div>}

        {loading ? (
          <p>Loading todos...</p>
        ) : (
          <TodoList
            todos={todos}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        )}
      </div>
    </div>
  );
}

export default App;
