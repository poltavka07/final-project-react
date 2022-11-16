import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IconHeart } from "./Header_icons";
// import pic0 from "../img/categories/1.webp";
// import pic1 from "../img/categories/2.webp";
// import pic2 from "../img/categories/3.webp";
// import pic3 from "../img/categories/4.webp";
// import pic4 from "../img/categories/5.webp";
// import pic5 from "../img/categories/6.webp";

const ProdCard = ({ id, value }) => {
  //let picName = "pic".concat(id);
  const [like, setLike] = useState(false);
  return (
    <>
      <div className="prodCardsNav__item">
        <Link to="/ProductPage">
          <img
            className="prodCardsNav__img"
            src={require(`../img/categories/${id + 1}.webp`)}
            alt={value}
          />
        </Link>
        <IconHeart myCl={"product_icon"} setLike={setLike} like={like} />{" "}
        <Link className="prodCardsNav__legend" to="/ProductPage">
          <span style={{ marginTop: "15px" }}>{value}</span>
          <span style={{ marginTop: "10px" }}>{value}</span>
          <span style={{ marginTop: "15px" }}>{value}</span>
        </Link>
      </div>
    </>
  );
};
const ProductsCards = () => {
  // const [hover, setHover] = useState();

  return (
    <>
      <div className="prodCardsNav container">
        {["1111", "22222", "33333", "44444"].map((value, index) => (
          <ProdCard
            value={value}
            id={index}
            // setHover={setHover}
            key={index}
          ></ProdCard>
        ))}
      </div>
    </>
  );
};
export default ProductsCards;
