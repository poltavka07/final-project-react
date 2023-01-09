import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
//import { useState } from "react";
const IconHeart = ({ myCl, setLike = "", like = "" }) => {
  if (
    myCl === "product_icon" ||
    myCl === "product_icon product_icon_active"
    // ||
    // myCl === "product_icon_active"
  )
    return (
      <svg
        // onClick={() => {
        //   like ? setLike(false) : setLike(true);
        // }}
        // style={{
        //   fill: like ? "#32313A" : "none",
        //   stroke: like ? "#32313A" : "#6e6d74",
        // }}
        className={myCl}
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        //fill="none"
        fill="current"
      >
        <path
          // stroke="#E6E5E8"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.6"
          d="M17.367 3.842a4.583 4.583 0 0 0-6.483 0L10 4.725l-.883-.883a4.584 4.584 0 1 0-6.483 6.483l.883.883L10 17.692l6.484-6.484.883-.883a4.585 4.585 0 0 0 0-6.483v0Z"
        />
      </svg>
    );
  else if (myCl === "old_product_icon") {
    return (
      <svg
        onClick={() => {
          like ? setLike(false) : setLike(true);
        }}
        style={{
          fill: like ? "#32313A" : "none",
          stroke: like ? "#32313A" : "#6e6d74",
        }}
        className={myCl}
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        //fill="none"
        fill="current"
      >
        <path
          // stroke="#E6E5E8"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.6"
          d="M17.367 3.842a4.583 4.583 0 0 0-6.483 0L10 4.725l-.883-.883a4.584 4.584 0 1 0-6.483 6.483l.883.883L10 17.692l6.484-6.484.883-.883a4.585 4.585 0 0 0 0-6.483v0Z"
        />
      </svg>
    );
  } else {
    return (
      <svg
        className={`${myCl} icnHov`}
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        // fill="currentColor"
      >
        <path
          // stroke="#E6E5E8"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.6"
          d="M17.367 3.842a4.583 4.583 0 0 0-6.483 0L10 4.725l-.883-.883a4.584 4.584 0 1 0-6.483 6.483l.883.883L10 17.692l6.484-6.484.883-.883a4.585 4.585 0 0 0 0-6.483v0Z"
        />
      </svg>
    );
  }
};

const IconUser = () => {
  return (
    <svg
      className="header_icon icnHov"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
    >
      <path
        //stroke="#E6E5E8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        d="M16.666 17.5v-1.667a3.333 3.333 0 0 0-3.333-3.333H6.666a3.333 3.333 0 0 0-3.333 3.333V17.5M10 9.167A3.333 3.333 0 1 0 10 2.5a3.333 3.333 0 0 0 0 6.667Z"
      />
    </svg>
  );
};

const IconBag = () => {
  return (
    <svg
      className="header_icon icnHov"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
    >
      <path
        stroke="currentColor"
        // stroke="#E6E5E8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        d="M5 1.667 2.5 5v11.667a1.666 1.666 0 0 0 1.667 1.666h11.666a1.666 1.666 0 0 0 1.667-1.666V5L15 1.667H5ZM2.5 5h15"
      />
      <path
        stroke="currentColor"
        //stroke="#E6E5E8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        d="M13.334 8.333a3.333 3.333 0 1 1-6.667 0"
      />
    </svg>
  );
};

const Icons = () => {
  const shopingCart = useSelector((store) => store.cart);
  if (shopingCart.length > 0) {
    return (
      <>
        <Link to="/FavoritePage">
          <IconHeart myCl={"header_icon"} />
        </Link>
        <IconUser />
        <Link className="icnBag" to="/ShoppingBagPage">
          <IconBag />
          <div className="iconBagCount">{shopingCart.length}</div>
        </Link>
      </>
    );
  } else {
    return (
      <>
        <Link to="/FavoritePage">
          <IconHeart myCl={"header_icon"} />
        </Link>
        <IconUser />
        <Link to="/ShoppingBagPage">
          <IconBag />
        </Link>
      </>
    );
  }
};

export default Icons;
export { IconHeart };
