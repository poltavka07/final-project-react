import React from "react";
//import CartCount from "./CartCount";
import { Dec, Inc, Cross } from "../icons";
import { cartItemPatch, cartRemove } from "../../store/actions/cartActions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";

const CartList = ({
  image,
  category,
  title,
  color,
  size,
  price,
  count: itemCount,
  itemId,
  id,
}) => {
  const [count, setCount] = useState(itemCount);
  const dispatch = useDispatch();
  return (
    <div className="cart_list">
      <div className="cart_list__block">
        <Link to={`/ProductPage/${id}`}>
          <img src={image} alt="prod" className="cart_list__img"></img>
        </Link>
        <div className="cart_list__text">
          <span className="cart_list__text_prodCategory">{category}</span>
          <span className="cart_list__text_prodTitle">{title}</span>
          <span className="cart_list__text_prodColor">Color: {color} </span>
          <span className="cart_list__text_prodColor">Size: {size} </span>
        </div>
      </div>
      <div className="cart_list__blockRight">
        <span className="cart_list__price">$ {price}</span>
        <div className="cart_list__count">
          <div className="bag__count">
            <button
              onClick={() => {
                if (count >= 2) {
                  setCount(count - 1);
                  dispatch(cartItemPatch({ itemId, count: count - 1 }));
                }
              }}
              className="bag__count__btn"
            >
              <Dec />
            </button>
            <span>{count}</span>
            <button
              onClick={() => {
                setCount(count + 1);
                dispatch(cartItemPatch({ itemId, count: count + 1 }));
              }}
              className="bag__count__btn"
            >
              <Inc />
            </button>
          </div>
          {/* <CartCount /> */}
        </div>
        <span className="cart_list__total">${(price * count).toFixed(2)}</span>
        <button
          onClick={() => {
            dispatch(cartRemove({ itemId }));
          }}
          className="cart_list__btn"
        >
          <Cross />
        </button>
      </div>
    </div>
  );
};
export default CartList;
