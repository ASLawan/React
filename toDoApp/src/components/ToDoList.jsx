import ToDoItem from "./ToDoItem";
import styles from "./todolist.module.css";

export default function ToDoList({ todos, setTodos }) {
  return (
    <div className={styles.listcontainer}>
      {todos.map((item) => (
        <ToDoItem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
