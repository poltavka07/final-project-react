import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IconHeart } from "./Header_icons";
import { Glide, GlideProps } from "react-glide";
import "react-glide/lib/reactGlide.css";
//слайдер с помощью глайдА

const ProdCard = ({ id, value }) => {
  const [like, setLike] = useState(false);

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
const ProductsCards2 = ({ title, data, a, b }) => {
  // const [hover, setHover] = useState();
  const props: GlideProps = {
    height: 600,
    width: 1400,
    // autoPlay: true,
    // autoPlaySpeed: 2000,
    onSlideChange: () => console.log("slide changed"),
    infinite: false,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="miniProd">
        <h2 className="container">{title}</h2>
        <div className="prodCardsNav container">
          <Glide {...props}>
            {data.slice(a, b).map((value, index) => (
              <ProdCard
                value={value}
                id={index}
                // setHover={setHover}
                key={index}
              ></ProdCard>
            ))}
          </Glide>
        </div>
      </div>
    </>
  );
};
export default ProductsCards2;
export { ProdCard };
