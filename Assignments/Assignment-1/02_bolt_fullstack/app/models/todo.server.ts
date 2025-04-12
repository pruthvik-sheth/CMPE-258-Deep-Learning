import { createClient } from "@libsql/client";

const client = createClient({
  url: process.env.TURSO_URL || "file:todo.db",
  authToken: process.env.TURSO_AUTH_TOKEN,
});

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
};

export async function getTodos() {
  const result = await client.execute("SELECT * FROM todos ORDER BY createdAt DESC");
  return result.rows as Todo[];
}

export async function createTodo(title: string) {
  const result = await client.execute({
    sql: "INSERT INTO todos (title, completed, createdAt) VALUES (?, 0, datetime('now')) RETURNING *",
    args: [title],
  });
  return result.rows[0] as Todo;
}

export async function toggleTodo(id: string, completed: boolean) {
  const result = await client.execute({
    sql: "UPDATE todos SET completed = ? WHERE id = ? RETURNING *",
    args: [completed ? 1 : 0, id],
  });
  return result.rows[0] as Todo;
}

export async function deleteTodo(id: string) {
  await client.execute({
    sql: "DELETE FROM todos WHERE id = ?",
    args: [id],
  });
}

// Initialize database
client.execute(`
  CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    completed BOOLEAN NOT NULL DEFAULT 0,
    createdAt DATETIME NOT NULL
  )
`);
