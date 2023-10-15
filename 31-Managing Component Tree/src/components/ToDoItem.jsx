import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);
  function itemClicked() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }
  return (
    <div onClick={itemClicked}>
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
