import React from "react";
import ReactDOM from "react-dom";

const firstName = "omer";
const lastName = "birgul";
const number = 22;

ReactDOM.render(
  <div>
    <h1>{`Welcome ${firstName + " " + lastName}`}</h1>
    <p>your luck number is {Math.floor(Math.random() *10)}</p>
  </div>,

  document.getElementById("root")
);
