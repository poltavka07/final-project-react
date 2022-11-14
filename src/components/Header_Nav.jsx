import React from "react";
//import HeaderSearch from "./Header_search";
import { Link } from "react-router-dom";
const HeaderNav = () => {
  return (
    <div className="container">
      <nav className="headerNav ">
        <Link className="headerNav__link" to="/NewInPage">
          New in
        </Link>
        <Link className="headerNav__link" to="/">
          Clothing
        </Link>
        <Link className="headerNav__link" to="/">
          Shoes
        </Link>
        <Link className="headerNav__link" to="/">
          Accessories
        </Link>
        <Link className="headerNav__link" to="/">
          Brands
        </Link>
        <Link className="headerNav__link" to="/">
          Sale
        </Link>
      </nav>
      <Link className="headerNav__search" to="/SearchPage">
        Search for...
      </Link>

      {/* <HeaderSearch /> */}
    </div>
  );
};
export default HeaderNav;
