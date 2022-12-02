import React from "react";

function TodoForm({ setInputText, todos, setTodos, inputText }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText.length != 0) {
      setTodos([
        ...todos,
        { text: inputText, completed: false, id: Date.now().toString() },
      ]);
      setInputText("");
    }
  };

  return (
    <form>
      <div className="input-group mt-4">
        <input
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          className="form-control form-control-lg"
          placeholder="Add new list item"
        />
        <span className="input-group-btn">
          <button
            onClick={submitTodoHandler}
            className="btn btn-primary btn-lg"
            type="submit"
          >
            Add
          </button>
        </span>
      </div>
    </form>
  );
}

export default TodoForm;
