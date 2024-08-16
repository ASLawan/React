import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }

  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.container}>
        <input
          className={styles.forminput}
          onChange={(e) => setTodo({ name: e.target.value })}
          type="text"
          value={todo.name}
          placeholder="Enter todo item..."
        />
        <button className={styles.formbtn} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
