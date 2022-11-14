import React from "react";
import { Link } from "react-router-dom";
function Promocode() {
  return (
    <div className="promocode">
      <span>Up to 50% off all dresses when use code DRESSLOVER</span>
      <Link className="promocode__link" to="/CategoryPage">
        Shop dresses
      </Link>
    </div>
  );
}

export default Promocode;
