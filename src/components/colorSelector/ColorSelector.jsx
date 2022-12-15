import React from "react";
import "./colorSelector.scss";
import { useState } from "react";

const ColorSelector = () => {
  const [chosenColor, setColor] = useState("White/red patterned");
  return (
    <>
      <div>
        <span>Select color: </span>
        <span className="chosenColor">{chosenColor}</span>
      </div>
      <div>
        <div
          className="colorBox colorBox__red"
          onClick={() => {
            setColor("White/red patterned");
          }}
        ></div>
        <div
          className="colorBox colorBox__violet"
          onClick={() => {
            setColor("White/violet patterned");
          }}
        ></div>
        <div
          className="colorBox colorBox__green"
          onClick={() => {
            setColor("Green plain");
          }}
        ></div>
        <div
          className="colorBox colorBox__striped"
          onClick={() => {
            setColor("Black/white striped");
          }}
        ></div>
      </div>
    </>
  );
};

export default ColorSelector;