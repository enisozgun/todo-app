import React, { useEffect, useState } from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  const [amount, setAmount] = useState(0);

  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.completed === false));
    setAmount(0);
  };

  function countSelected() {
    let array = todos.filter((el) => el.completed === true);
    let count = array.length;
    setAmount(count);
  }

  return (
    <div>
      <ul className="list-group list-group-flush">
        {todos.map((todo) => (
          <Todo
            countSelected={countSelected}
            completed={todo.completed}
            text={todo.text}
            key={todo.id}
            todo={todo}
          />
        ))}
      </ul>
      <hr />
      <span>{amount} item(s) selected</span>
      <button className="delete-button" onClick={deleteHandler}>
        Remove Selected
      </button>
    </div>
  );
};

export default TodoList;
