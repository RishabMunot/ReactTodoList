import React, { useState } from "react";

function TodoItem(props) {
  var [isStrike, setIsStrike] = useState(false);

  // function toogleStrike(event) {
  //   setIsStrike(!isStrike);
  // }

  return (
    <li
      onClick={event => props.onClicked(props.id)}
      style={{ textDecoration: isStrike ? "line-through" : "none" }}
    >
      {props.content}
    </li>
  );
}

export default TodoItem;
