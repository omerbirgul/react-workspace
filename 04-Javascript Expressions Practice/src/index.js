//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

import React from "react";
import ReactDOM from "react-dom";

const fName = "Omer Faruk";
const lName = "Birgul";
const year = new Date().getFullYear();

ReactDOM.render(
  <div>
    <h1>Welcome to the React JSX Practice</h1>
    <p>Created by {fName + " " + lName}.</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
