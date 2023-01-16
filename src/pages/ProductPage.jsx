import React, { useEffect, useState } from "react";
import StarRating from "../components/StarRating/Stars";
// import "../pages/pageStyles/productPage.scss";

import ColorSelector from "../components/colorSelector/ColorSelector";
import SizeSelector from "../components/sizeSelector/SizeSelector";
import product from "../components/product";
import ProductsCards from "../components/Product_cards";
import { useParams } from "react-router-dom";
import Loader from "../components/loader/loader";
import axios from "axios";
import { IconHeart } from "../components/Header_icons";
import { useIncludeInFavorites } from "../components/customHook";
import { cartAdd } from "../store/actions/cartActions";
import { useDispatch } from "react-redux";

const ProductPage = () => {
  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState({});
  const { id } = useParams();
  const [select, setSelect] = useState(); //select size
  const [chosenColor, setColor] = useState("White/red patterned");

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    axios.get(`https://fakestoreapi.com/products/${id}`).then(({ data }) => {
      setProductData(data);
      setLoading(false);
    });
  }, [id]);

  const { rating, title, category, price, description, image } = productData;

  const { inFavorites, toggleFavorites } = useIncludeInFavorites(
    productData.id,
    productData
  );

  return loading ? (
    <Loader />
  ) : (
    <>
      {/* <h1 className="container">page product</h1> */}
      <div className="prod container">
        <img src={image} className="prod__img" alt={category} />
        <div className="prod__legend">
          <span>{category}</span>
          <h1 className="prod__legend_title">{title}</h1>
          <StarRating rate={Math.round(rating?.rate)} vote={rating?.count} />
          <div style={{ padding: "30px 0" }}>
            <span className="prod__price_main">{`$${price}`}</span>
            <span className="prod__price_old">{`$${(
              price +
              price * 0.4
            ).toFixed(2)}`}</span>
          </div>
          <ColorSelector setColor={setColor} chosenColor={chosenColor} />
          <SizeSelector setSelect={setSelect} select={select} />
          <div className="prod_blockBtns">
            <button
              className="prod__btn"
              onClick={() => {
                dispatch(
                  cartAdd({
                    ...productData,
                    size: select
                      ? select
                      : "you didn't choose, the default size is M",
                    color: chosenColor,
                    costDelivery: 10,
                    count: 1,
                    itemId: new Date().getTime(),
                  })
                );
              }}
            >
              Add to cart
            </button>
            <button
              className="prod__btn_icn"
              onClick={() => {
                toggleFavorites();
              }}
            >
              <IconHeart
                myCl={`product_icon product_icon_pageIcn ${
                  inFavorites() ? "product_icon_active" : null
                }`}
              />
            </button>
          </div>
          <span className="prod__legend_description">Product details</span>
          <p>{description}</p>
        </div>
      </div>
      <ProductsCards title={"You may also like"} data={product} a={8} b={16} />
    </>
  );
};
export default ProductPage;
