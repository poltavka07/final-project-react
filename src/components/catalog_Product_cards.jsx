import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IconHeart } from "./Header_icons";

const CatalogProdCard = ({ id, value }) => {
  const [like, setLike] = useState(false);

  return (
    <>
      <div
        style={{ justifyContent: "start", padding: "20px" }}
        className="prodCardsNav__item catalog"
      >
        <Link to="/ProductPage">
          <img
            src={value.image}
            className="prodCardsNav__img"
            alt={value.category}
          />
        </Link>
        <IconHeart myCl={"product_icon"} setLike={setLike} like={like} />
        <Link className="prodCardsNav__legend" to="/ProductPage">
          <h3 style={{ marginTop: "15px" }}>{value.title}</h3>
          <span className="prodCardsNav__text" style={{ marginTop: "10px" }}>
            {value.description}
          </span>
          <span
            className="prodCardsNav__text"
            style={{ marginTop: "15px", color: "red", fontWeight: "800" }}
          >
            {value.price} $
          </span>
        </Link>
      </div>
    </>
  );
};

export default CatalogProdCard;
