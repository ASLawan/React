import { useState } from "react";
import ToDoList from "./ToDoList";
import Form from "./Form";
import Footer from "./Footer";

export default function ToDo() {
  const [todos, setTodos] = useState([]);

  // Total todos
  const totalTodos = todos.length;

  // Completed todos
  const completedTodos = todos.filter((todo) => todo.done).length;

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />

      <ToDoList todos={todos} setTodos={setTodos} />

      <Footer totalTodos={totalTodos} completedTodos={completedTodos} />
    </div>
  );
}
