import React from "react";
import heroNewIn from "../img/bg/bigpic5_grey.webp";

const NewInPage = () => {
  return (
    <>
      <div>
        <h2 className="page__title container">here will be a NewIn page</h2>
        <a className="container" href="/">
          Home
        </a>
      </div>
      <div className="heroNewIn">
        <img className="heroNewIn__img" src={heroNewIn} alt="girl"></img>
        <div className="heroNewIn__text">
          <span className="heroNewIn__text_title">New in</span>
          <p>This season, inside is cancelled</p>
        </div>
      </div>
    </>
  );
};
export default NewInPage;
