import React from "react";
import { Link } from "react-router-dom";
import { Social } from "./Footer_icons";
import Logo from "./Header_logo";

const Footer = () => {
  return (
    <div className="container" style={{ alignItems: "flex-start" }}>
      <FooterNav
        title={"Customer support"}
        data={["Size guides", "Shipping", "Returns", "Track my order"]}
      />
      <FooterNav
        title={"My account"}
        data={[
          "Order history",
          "Payment methods",
          "Account settings",
          "Favorites",
        ]}
      />
      <SignUp />
    </div>
  );
};

const FooterNav = ({ title, data }) => {
  return (
    <div className="footerNav ">
      <span className="footerNav__title">{title}</span>
      <nav>
        {data.map((value, index) => (
          <Link
            className="footerNav__link"
            to={("/" + value).replaceAll(" ", "_")}
            key={index}
          >
            {value}
          </Link>
        ))}
      </nav>
    </div>
  );
};

const SignUp = () => {
  return (
    <div className="signUp">
      <p>
        Sign up today for email exclusives including early access to Sale, the
        latest trends and arrivals from your favorite designers and can’t miss
        promotions.
      </p>
      <form className="signUp__form">
        <input
          className="signUp__input"
          type="email"
          placeholder="Enter your Email"
          height={"50px"}
        />
        {/* <input type="button">Subscribe</input> */}
        <button className="signUp__btn">Subscribe</button>
      </form>
      <Social />
    </div>
  );
};
export { Footer };

const SubFooter = () => {
  return (
    <div className="container">
      <Link to="/">
        <Logo myCl={"header_logo__black"} />
      </Link>
      <span className="copy">&copy; 2021 All rights reserved</span>
    </div>
  );
};
export { SubFooter };
