import React from "react";
import Logo from "./Header_logo";
import Icons from "./Header_icons";
import HeaderNav from "./Header_Nav";
import { Link, Outlet } from "react-router-dom";
import { Footer, SubFooter } from "./Footer";

function Header() {
  return (
    <>
      <div className="header_border">
        <header className="header">
          <div className="container">
            <Link to="/">
              <Logo myCl={"header_logo"} />
            </Link>
            <div>
              <Icons />
            </div>
          </div>
        </header>
        <HeaderNav />
      </div>
      <Outlet />
      <footer>
        <Footer />
      </footer>
      <SubFooter />
    </>
  );
}

export default Header;
