import React from "react";
import Logo from "./Header_logo";
import Icons from "./Header_icons";
import HeaderNav from "./Header_Nav";
import { Link, Outlet } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header_border">
        <header className="header">
          <div className="container">
            <Link to="/">
              <Logo />
            </Link>
            <div>
              <Icons />
            </div>
          </div>
        </header>
        <HeaderNav />
      </div>
      <div>
        <Outlet />
      </div>
      <h1
        style={{
          backgroundColor: "red",
        }}
      >
        footer
      </h1>
    </>
  );
}

export default Header;
