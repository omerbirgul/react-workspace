// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const hondaCar = [
  cars[0],
  cars[0].speedStats.topSpeed,
  cars[0].coloursByPopularity[0]
];
const [honda, hondaTopSpeed, hondaTopColour] = hondaCar;

const teslaCar = [
  cars[1],
  cars[1].speedStats.topSpeed,
  cars[1].coloursByPopularity[0]
];
const [tesla, teslaTopSpeed, teslaTopColour] = teslaCar;


// const allCars = [
//   {
//     cars[0],
//     cars[0].speedStats.topSpeed,
//     cars[0].coloursByPopularity[0]
//   },
//   {
//     cars[1],
//     cars[1].speedStats.topSpeed,
//     cars[1].coloursByPopularity[0]
//   }
//  ];


ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
