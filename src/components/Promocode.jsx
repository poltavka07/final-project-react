import React from "react";
import { Link } from "react-router-dom";

function Promocode() {
  return (
    <div className="promocode">
      <span className="promocode__text">
        Up to 50% off all dresses when use code DRESSLOVER
        <Link className="promocode__link" to="/CategoryPage">
          Shop dresses
        </Link>
      </span>
    </div>
  );
}

export default Promocode;
