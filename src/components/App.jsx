import React, { useState } from "react";

function App() {
  var [todos, setTodo] = useState(["Buy Milk"]);

  var [state, setState] = useState("");

  function handleChangeOfText(event) {
    var value = event.target.value;
    setState(value);
  }

  function addTodo() {
    console.log(todos);

    setTodo(prevValue => prevValue.push(state));
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
          {todos.map(element => {
            return <li>{element}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
