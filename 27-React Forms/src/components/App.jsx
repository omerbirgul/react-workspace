import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function clickFunction(){
    setValue(name)
    
  }

  return (
    <div className="container">
      <h1>Hello {value} </h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
      />
      <button  onClick={clickFunction}>Submit</button>
    </div>
  );
}

export default App;
