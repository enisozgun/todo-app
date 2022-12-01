import { useEffect, useState } from "react";
import "../index.css";

const Todo = ({ text, todo, countSelected }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  function completeHandler() {
    todo.completed = !todo.completed;
    setIsCompleted(!isCompleted);
    console.log(todo.completed);
  }

  useEffect(() => {
    countSelected();
  }, [isCompleted]);

  return (
    <li className="list-group-item mt-3">
      <div className="todo-list-item">
        <input
          onClick={completeHandler}
          className="completed-button"
          type="checkbox"
        ></input>
        <label
          className="todo-text"
          contentEditable="true"
        >
          {text}
        </label>
      </div>
    </li>
  );
};

export default Todo;
