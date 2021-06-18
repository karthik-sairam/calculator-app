import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Calculator from "./Calc.js"
  
var destination = document.querySelector("#container");
  
ReactDOM.render(
    <div>
        <Calculator/>
    </div>,
    destination
);
