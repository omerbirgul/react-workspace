import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [items, setItem] = useState([]);

  function clickButton() {
    setItem((prevİnput) => {
      return [...prevİnput, input];
    });
    setInput("");
  }

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={handleChange}
          value={input}
          placeholder="write an item"
          type="text"
        />
        <button onClick={clickButton}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <li>{todoItem} </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
