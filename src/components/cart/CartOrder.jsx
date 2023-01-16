import React from "react";
import CartOffer from "./CartOffer";
const CartOrder = ({ subtotal, shippingSum }) => {
  return (
    <div className="cart_order">
      <span className="cart_order__title">Order summary</span>
      <div className="cart_order__item">
        <span>Subtotal</span>
        <span>${(subtotal + 0).toFixed(2)}</span>
      </div>
      <div className="cart_order__item">
        <span>Shipping</span>
        {subtotal < 500 ? <span>${shippingSum}</span> : <span>FREE</span>}
      </div>
      <CartOffer subtotal={subtotal} />
      <div className="promo__form cart_order__item">
        <input
          className="promo__input"
          type="text"
          placeholder="Promocode"
          height={"50px"}
        />
        <button className="promo__btn">Apply</button>
      </div>
      <div className="cart_order__item item_border">
        <span className="cart_order__item_strong">Order total</span>
        <span className="cart_order__item_strong">
          ${subtotal < 500 ? (subtotal + shippingSum).toFixed(2) : subtotal}
        </span>
      </div>

      <button className="order__btn">Proceed to checkout</button>
    </div>
  );
};
export default CartOrder;
