const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory data store for todos
let todos = [
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Build a Todo App", completed: false },
  { id: 3, text: "Deploy the App", completed: false },
];

// Helper function to generate a new ID
const generateId = () => {
  return todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;
};

// GET all todos
app.get("/api/todos", (req, res) => {
  res.json(todos);
});

// GET a specific todo
app.get("/api/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((todo) => todo.id === id);

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  res.json(todo);
});

// POST a new todo
app.post("/api/todos", (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ message: "Text is required" });
  }

  const newTodo = {
    id: generateId(),
    text,
    completed: false,
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// PUT (update) a todo
app.put("/api/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { text, completed } = req.body;

  const todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }

  todos[todoIndex] = {
    ...todos[todoIndex],
    text: text !== undefined ? text : todos[todoIndex].text,
    completed: completed !== undefined ? completed : todos[todoIndex].completed,
  };

  res.json(todos[todoIndex]);
});

// DELETE a todo
app.delete("/api/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }

  const deletedTodo = todos[todoIndex];
  todos = todos.filter((todo) => todo.id !== id);

  res.json(deletedTodo);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
