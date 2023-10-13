import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function clickFunction(e) {
    setValue(name);

    e.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {value} </h1>
      <form onSubmit = {clickFunction} >
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
        />
        <button type="submit" >Submit</button>
      </form>
    </div>
  );
}

export default App;
