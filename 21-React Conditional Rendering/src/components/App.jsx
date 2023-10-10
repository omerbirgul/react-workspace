import React from "react";
import Login from "./Login";

var isLoggedIn = false;

function renderConditionaly() {
  if (isLoggedIn === true) {
    return <h1> Hello </h1>;
  } else {
    return <Login />;
  }
}

function App() {
  return <div className="container">{renderConditionaly()}</div>;
}

export default App;
