import React from "react";
const CartOffer = ({ subtotal }) => {
  const temp = Math.ceil(500 - subtotal);
  if (subtotal > 450 && subtotal < 500) {
    return (
      <div>
        <span className="cart_order__item_tiny">
          Spend ${temp} more to get free shipping!
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="cart_order__item_tiny"></span>
      </div>
    );
  }
};
export default CartOffer;
