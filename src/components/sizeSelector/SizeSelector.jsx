import React from "react";
import "./sizeSelector.scss";
//import { useState } from "react";
import { Link } from "react-router-dom";

const SizeSelector = () => {
  // const [] = useState();
  return (
    <div className="sizeSelector">
      <div className="sizeSelector__title">
        <span>Select size:</span>
        <Link className="sizeSelector__link" to="/Size_guides">
          Size gide
        </Link>
      </div>
      <input className="sizeSelector__input" type="text" placeholder="Size" />
    </div>
  );
};
export default SizeSelector;
