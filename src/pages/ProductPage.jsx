import React, { useEffect, useState } from "react";
import StarRating from "../components/StarRating/Stars";
//import bprod1 from "../img/products/bprod/bprod1.webp";
import "../pages/pageStyles/productPage.scss";
import ColorSelector from "../components/colorSelector/ColorSelector";
import SizeSelector from "../components/sizeSelector/SizeSelector";
import product from "../components/product";
import ProductsCards from "../components/Product_cards";
import { useParams } from "react-router-dom";
import Loader from "../components/loader/loader";
import axios from "axios";

const ProductPage = () => {
  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then(({ data }) => {
      setProductData(data);
      setLoading(false);
    });
  }, [id]);

  const { rating, title, category, price, description, image } = productData;

  return loading ? (
    <Loader />
  ) : (
    <>
      <h1 className="container">page product</h1>
      <div className="prod container">
        <img src={image} className="prod__img" alt={category} />
        <div className="prod__legend">
          <span>{category}</span>
          <h1 tyle={{ padding: "5px 0" }}>{title}</h1>
          <StarRating rate={Math.round(rating?.rate)} vote={rating?.count} />
          <div style={{ padding: "30px 0" }}>
            <span className="prod__price_main">{`$${price}`}</span>
            <span className="prod__price_old">{`$${(
              price +
              price * 0.4
            ).toFixed(2)}`}</span>
          </div>
          <ColorSelector />
          <SizeSelector />
          <span style={{ fontWeight: "600", color: "#32313A" }}>
            Product details
          </span>
          <p>{description}</p>
        </div>
      </div>
      <ProductsCards title={"You may also like"} data={product} a={2} b={9} />
    </>
  );
};
export default ProductPage;
