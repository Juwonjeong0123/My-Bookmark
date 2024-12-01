import React, { useState } from "react";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input.trim()]);
      setInput('');
    }
  };

  const deleteTodo = (indexToRemove: number) => {
    setTodos(todos.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Add a new todo"
      />
      <button onClick={addTodo}>Add</button>
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
};

export default App;
