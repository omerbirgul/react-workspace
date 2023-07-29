import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  fontSize: "25px",
  border: "3px dotted black",
  cursor: "pointer"
};

customStyle.color = "green";
customStyle.margin = "4px";
customStyle.padding = "10px";

ReactDOM.render(
  <div>
    <h1 style={customStyle}>Hello World!</h1>
  </div>,

  document.getElementById("root")
);
