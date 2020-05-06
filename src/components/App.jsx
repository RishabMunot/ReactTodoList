import React, { useState } from "react";
import TodoItem from "./TodoItem";

function App() {
  var [todos, setTodo] = useState([]);

  var [state, setState] = useState("");

  function handleChangeOfText(event) {
    var value = event.target.value;
    setState(value);
  }

  function addTodo() {
    setTodo(prev => [...prev, state]);
    setState("");
  }

  function deleteItem(key) {
    setTodo(prev => {
      return prev.filter((item, index) => {
        return key !== index;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChangeOfText} value={state} type="text" />
        <button onClick={addTodo}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {todos.map((element, key) => (
            <TodoItem id={key} content={element} onClicked={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
