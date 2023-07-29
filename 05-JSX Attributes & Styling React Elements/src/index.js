import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <div className="images">
      <img
        className="food-img"
        alt="jamon"
        src="https://www.pngmart.com/files/16/Jamon-PNG-Free-Download.png"
      ></img>

      <img className="food-img" alt="generate" src={img + "?grayscale"}></img>

      <img
        className="food-img"
        alt="noodles"
        src="https://www.pngall.com/wp-content/uploads/5/Noodles-PNG-Image.png"
      ></img>
    </div>
  </div>,
  document.getElementById("root")
);
