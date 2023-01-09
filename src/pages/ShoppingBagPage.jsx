import React from "react";
import "../pages/pageStyles/shoppingBagPage.scss";
import BrendBlock from "../components/BrendBlock";
import product from "../components/product";
import ProductsCards from "../components/Product_cards";
import CartList from "../components/cart/CartList";
import CartOrder from "../components/cart/CartOrder";
import { Trash } from "../components/icons";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { cartRemoveAll } from "../store/actions/cartActions";
import emptyBag from "../img/emptyBag.webp";

const ShoppingBagPage = () => {
  const [subtotal, setSubtotal] = useState(0);
  const shopingCart = useSelector((store) => store.cart);
  useEffect(() => {
    const sum = +shopingCart
      .reduce((accumulator, item) => {
        return accumulator + item.price * item.count;
      }, 0)
      .toFixed(2);
    const delivSum = shopingCart.reduce((accumulator, item) => {
      return accumulator + item.costDelivery * item.count;
    }, 0);

    setSubtotal({ sum, delivSum });
    console.log(sum.toFixed(2));
  }, [shopingCart]);

  const dispatch = useDispatch();
  if (shopingCart.length > 0) {
    return (
      <>
        <div className="container">
          <h1 className="bag__title">Shopping bag</h1>
          <p></p>
        </div>
        <div className="container cart">
          <div className="cart_main">
            <div className="cart_main__header">
              <span className="cart_main__header__item">Item</span>
              <div className="cart_main__header__block">
                <span>Price</span>
                <span>Quantity</span>
                <span>Total</span>
              </div>
            </div>
            {shopingCart.map((item, index) => {
              return <CartList key={`cart_item${index}`} {...item} />;
            })}

            <div className="cart_main__footer">
              <button
                className="cart_main__footer__btn"
                onClick={() => {
                  dispatch(cartRemoveAll());
                }}
              >
                <Trash />
                Clear bag
              </button>
              <div className="cart_main__footer__blockRight">
                <span>Subtotal:</span>
                <span className="cart_main__footer__total">
                  ${(subtotal.sum + 0).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
          <CartOrder subtotal={subtotal.sum} shippingSum={subtotal.delivSum} />
        </div>
        <ProductsCards title={"You may also like"} data={product} a={2} b={9} />
        <BrendBlock />
      </>
    );
  }
  return (
    <>
      <h1 className="favPage__title">Your shopping bag is still empty</h1>
      <img src={emptyBag} alt="emptyBag" className="cart_img" />
    </>
  );
};

export default ShoppingBagPage;
