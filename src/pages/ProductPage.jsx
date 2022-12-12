import React from "react";
import StarRating from "../components/StarRating/Stars";
import bprod1 from "../img/products/bprod/bprod1.webp";
import "../pages/pageStyles/productPage.scss";

const ProductPage = ({ id, value }) => {
  return (
    <>
      <h1 className="container">page product</h1>
      <div className="prod container">
        <img src={bprod1} className="prod__img" alt="women's cloth" />
        {/* <img src={value.image} className="prod__img" alt={value.category} /> */}
        <div className="prod__legend">
          <span>category</span>
          {/* {value.category}  */}
          <h1>title</h1>
          {/* {value.title}  */}
          <StarRating />
          <div>
            <span className="prod__price_main">0.00 $</span>
            {/* {value.price} $ */}
            <span className="prod__price_old">$62.90</span>
          </div>
          <span style={{ fontWeight: "600", color: "#32313A" }}>
            Product details
          </span>
          <p>Product details \Описание продукта</p>
          {/*  {value.description} */}
        </div>
      </div>
    </>
  );
};
export default ProductPage;
