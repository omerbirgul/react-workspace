import React, { useState } from "react";

function App() {
	  setInterval( updateTime,1000);
	
  let currentTime = new Date().toLocaleTimeString('en-GB');
  const [time, setTime] = useState(currentTime);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString('en-GB');
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
