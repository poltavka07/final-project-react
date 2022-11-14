import React from "react";
import { Link } from "react-router-dom";
const IconHeart = () => {
  return (
    <svg
      className="header_icon"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
    >
      <path
        stroke="#E6E5E8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        d="M17.367 3.842a4.583 4.583 0 0 0-6.483 0L10 4.725l-.883-.883a4.584 4.584 0 1 0-6.483 6.483l.883.883L10 17.692l6.484-6.484.883-.883a4.585 4.585 0 0 0 0-6.483v0Z"
      />
    </svg>
  );
};

const IconUser = () => {
  return (
    <svg
      className="header_icon"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
    >
      <path
        stroke="#E6E5E8"
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
      className="header_icon"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
    >
      <path
        stroke="#E6E5E8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        d="M5 1.667 2.5 5v11.667a1.666 1.666 0 0 0 1.667 1.666h11.666a1.666 1.666 0 0 0 1.667-1.666V5L15 1.667H5ZM2.5 5h15"
      />
      <path
        stroke="#E6E5E8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        d="M13.334 8.333a3.333 3.333 0 1 1-6.667 0"
      />
    </svg>
  );
};

const Icons = () => {
  return (
    <>
      <IconHeart />
      <IconUser />
      <Link to="/ShoppingBagPage">
        <IconBag />
      </Link>
    </>
  );
};

export default Icons;
