import React, { useState } from "react";

function App() {
  var greetings = "hello there";
  const [headingText, setHeadingText] = useState(greetings);
  const [isMouseOver, setMouseOver] = useState(false);

  function handleClick() {
    setHeadingText("Submitted");
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut(){
    setMouseOver(false)
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onMouseOut={handleMouseOut}
        onMouseOver={handleMouseOver}
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
