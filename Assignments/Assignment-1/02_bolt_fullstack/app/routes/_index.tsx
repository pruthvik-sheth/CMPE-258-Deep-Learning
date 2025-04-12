import { json, type ActionFunctionArgs } from "@remix-run/node";
import { Form, useLoaderData, useNavigation } from "@remix-run/react";
import { useEffect, useRef } from "react";
import { createTodo, deleteTodo, getTodos, toggleTodo } from "~/models/todo.server";

export async function loader() {
  const todos = await getTodos();
  return json({ todos });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const intent = formData.get("intent");

  switch (intent) {
    case "create": {
      const title = formData.get("title");
      if (typeof title !== "string" || !title.trim()) {
        return json({ error: "Title is required" }, { status: 400 });
      }
      await createTodo(title);
      return json({ success: true });
    }
    case "toggle": {
      const id = formData.get("id");
      const completed = formData.get("completed") === "true";
      if (typeof id !== "string") {
        return json({ error: "Invalid todo ID" }, { status: 400 });
      }
      await toggleTodo(id, !completed);
      return json({ success: true });
    }
    case "delete": {
      const id = formData.get("id");
      if (typeof id !== "string") {
        return json({ error: "Invalid todo ID" }, { status: 400 });
      }
      await deleteTodo(id);
      return json({ success: true });
    }
    default:
      return json({ error: "Invalid intent" }, { status: 400 });
  }
}

export default function Index() {
  const { todos } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (navigation.state === "idle") {
      formRef.current?.reset();
    }
  }, [navigation.state]);

  return (
    <main className="mx-auto max-w-2xl p-6">
      <h1 className="mb-8 text-3xl font-bold">Todo App</h1>

      <Form ref={formRef} method="post" className="mb-8">
        <div className="flex gap-2">
          <input
            type="text"
            name="title"
            className="flex-1 rounded border border-gray-300 px-3 py-2"
            placeholder="What needs to be done?"
          />
          <button
            type="submit"
            name="intent"
            value="create"
            className="rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
          >
            Add
          </button>
        </div>
      </Form>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between rounded border border-gray-200 px-4 py-3"
          >
            <div className="flex items-center gap-3">
              <Form method="post">
                <input type="hidden" name="id" value={todo.id} />
                <input type="hidden" name="completed" value={String(todo.completed)} />
                <button
                  type="submit"
                  name="intent"
                  value="toggle"
                  className="rounded-full border border-gray-300 p-2 hover:bg-gray-100"
                >
                  <span className="sr-only">
                    Mark as {todo.completed ? "incomplete" : "complete"}
                  </span>
                  <div
                    className={`h-4 w-4 rounded-full ${
                      todo.completed ? "bg-blue-500" : "bg-white"
                    }`}
                  />
                </button>
              </Form>
              <span className={todo.completed ? "text-gray-500 line-through" : ""}>
                {todo.title}
              </span>
            </div>
            <Form method="post">
              <input type="hidden" name="id" value={todo.id} />
              <button
                type="submit"
                name="intent"
                value="delete"
                className="text-sm text-red-500 hover:text-red-600"
              >
                Delete
              </button>
            </Form>
          </li>
        ))}
      </ul>
    </main>
  );
}
