import React from "react";
import { Link } from "react-router-dom";
import { Logo1, Logo2, Logo3, Logo4, Logo5 } from "../components/logos";

function BrendBlock() {
  return (
    <div className="container">
      <Logo1 />
      <Logo2 />
      <Logo3 />
      <Logo4 />
      <Logo5 />
      <Link className="brend__link" to="/BrandPageAZ">
        All brands
      </Link>
    </div>
  );
}

export default BrendBlock;
