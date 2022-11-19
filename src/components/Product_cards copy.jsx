import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IconHeart } from "./Header_icons";
//без слайдера

const ProdCard = ({ id, value }) => {
  const [like, setLike] = useState(false);
  console.log(value.src);

  return (
    <>
      <div className="prodCardsNav__item">
        <Link to="/ProductPage">
          <img
            src={value.src}
            className="prodCardsNav__img"
            alt={value.describe}
          />
        </Link>
        <IconHeart myCl={"product_icon"} setLike={setLike} like={like} />{" "}
        <Link className="prodCardsNav__legend" to="/ProductPage">
          <h3 style={{ marginTop: "15px" }}>{value.brand}</h3>
          <span className="prodCardsNav__text" style={{ marginTop: "10px" }}>
            {value.describe}
          </span>
          <span className="prodCardsNav__text" style={{ marginTop: "15px" }}>
            {value.price}
          </span>
        </Link>
      </div>
    </>
  );
};
const ProductsCards = ({ title, data, a, b }) => {
  // const [hover, setHover] = useState();

  return (
    <>
      <div className="miniProd">
        <h2 className="container">{title}</h2>
        <div className="prodCardsNav container">
          {data.slice(a, b).map((value, index) => (
            <ProdCard
              value={value}
              id={index}
              // setHover={setHover}
              key={index}
            ></ProdCard>
          ))}
        </div>
      </div>
    </>
  );
};
export default ProductsCards;
export { ProdCard };
