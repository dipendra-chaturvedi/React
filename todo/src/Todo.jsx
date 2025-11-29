import React from "react";
import { useState } from "react";

function Todo() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = newTodo.trim();
    if (trimmed) {
      setTodos((prev) => [
        ...prev,
        { text: trimmed, completed: false, id: Date.now() },
      ]);
      setNewTodo("");
    }
  };

  // delete by id
  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  // toggle completed by id
  const handleToggle = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  return (
    <div>
      <h1>Todo</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="todo-input" style={{ display: "none" }}>
          New todo
        </label>
        <input
          id="todo-input"
          type="text"
          placeholder="Add new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ margin: "8px 0", display: "flex", gap: 8, alignItems: "center" }}>
            <span
              onClick={() => handleToggle(todo.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleToggle(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
                marginRight: 8,
                outline: "none",
              }}
              aria-pressed={todo.completed}
            >
              {todo.text}
            </span>

            <button type="button" onClick={() => handleDelete(todo.id)} aria-label={`Delete ${todo.text}`}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
