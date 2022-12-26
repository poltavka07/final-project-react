import React from "react";
import "../pages/pageStyles/shoppingBagPage.scss";
import { useSelector, useDispatch } from "react-redux";
import { countIncrement, countDicrement } from "../store/actions/countActions";
import BrendBlock from "../components/BrendBlock";
import product from "../components/product";
import ProductsCards from "../components/Product_cards";

const ShoppingBagPage = () => {
  const dispatch = useDispatch();
  const counter = useSelector((store) => store.count?.count);

  return (
    <>
      <div className="container">
        <h1 className="bag__title">Shopping bag</h1>
        <p></p>
      </div>
      <div className="container">
        <div className="bag__count">
          <button
            onClick={() => {
              dispatch(countDicrement());
            }}
            className="bag__count__btn"
          >
            -
          </button>
          <span>{counter && counter}</span>
          <button
            onClick={() => {
              dispatch(countIncrement());
            }}
            className="bag__count__btn"
          >
            +
          </button>
        </div>
      </div>
      <ProductsCards title={"You may also like"} data={product} a={2} b={9} />
      <BrendBlock />
    </>
  );
};
export default ShoppingBagPage;
