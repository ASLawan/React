import styles from "./todoitem.module.css";

export default function ToDoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("Delete button clicked for item: ", item);
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleClick(name) {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
  }
  //strikethrough if done with task
  const completedTodo = item.done ? styles.completed : "";

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={completedTodo} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deletebtn}
          >
            X
          </button>
        </span>
      </div>
      <hr className={styles.separator} />
    </div>
  );
}
