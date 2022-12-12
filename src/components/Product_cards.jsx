import React from "react";
import { useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { IconHeart } from "./Header_icons";
import Glider from "react-glider";
import "glider-js/glider.min.css";
import { Next, Prev } from "../components/icons";
//слайдер с помощью глайдЕРА

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
const ProductsCards = ({ title, data, a, b }) => {
  const leftArrowEl = useRef(null);
  const rightArrowEl = useRef(null);
  const [isReady, setIsReady] = useState(false);

  const leftArrowCallbackRef = useCallback((element) => {
    leftArrowEl.current = element;
    setIsReady(Boolean(leftArrowEl.current && rightArrowEl.current));
  }, []);

  const rightArrowCallbackRef = useCallback((element) => {
    rightArrowEl.current = element;
    setIsReady(Boolean(leftArrowEl.current && rightArrowEl.current));
  }, []);

  // const [hover, setHover] = useState();

  return (
    <>
      <div className="miniProd">
        <div>
          <h2 className="container">
            {title}
            <div className="sliderBtn">
              <button
                ref={leftArrowCallbackRef}
                type="button"
                aria-label="Previous"
                className="custom-arrow"
              >
                {<Prev />}
              </button>
              <button
                ref={rightArrowCallbackRef}
                type="button"
                aria-label="Next"
                className="custom-arrow"
              >
                {<Next />}
              </button>
            </div>
          </h2>
        </div>

        <div className="prodCardsNav container">
          {isReady && (
            <Glider
              className="glider-container "
              draggable
              // rewind={true}
              hasArrows
              arrows={{
                prev: leftArrowEl.current,
                next: rightArrowEl.current,
              }}
              slidesToShow={4}
              slidesToScroll={1}
            >
              {data.slice(a, b).map((value, index) => (
                <ProdCard
                  value={value}
                  id={index}
                  // setHover={setHover}
                  key={index}
                ></ProdCard>
              ))}
            </Glider>
          )}
        </div>
      </div>
    </>
  );
};
export default ProductsCards;
export { ProdCard };
