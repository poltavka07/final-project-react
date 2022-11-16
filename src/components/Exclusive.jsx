import React from "react";
import { Link } from "react-router-dom";
import bigPic from "../img/bg/bigpic4_green.webp";
function Exclusive() {
  return (
    <div className="container">
      <div className="exclusive">
        <h1>Eco Aware brands: Exclusively at Dresnote</h1>
        <p className="exclusive__text">
          Science Story is a collaboration between Dressnote and creative
          thinkers, researchers and brands who are developing cutting-edge
          materials designed to address the environmental impacts of the textile
          industry.
        </p>
        <Link className="exclusive__link" to="/CategoryPage">
          Shop Eco collection
        </Link>
      </div>
      <img className="exclusive__img" src={bigPic} alt="girl" />
    </div>
  );
}

export default Exclusive;
