import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clothingLoader,
  clothingLoaderFailed,
  clothingLoaderSuccess,
} from "../store/actions/clothingActions";
import { useEffect, useCallback, useRef, useState } from "react";
import { getClothing } from "../api/clothing";
import CatalogProdCard from "../components/catalog_Product_cards";
import Loader from "../components/loader/loader";
import Glider from "react-glider";
import "glider-js/glider.min.css";
import { Next, Prev } from "../components/icons";

const ClothingPage = () => {
  const dispatch = useDispatch();
  const { loading, error, clothing } = useSelector((store) => store.catalog);
  useEffect(() => {
    dispatch(clothingLoader());
    getClothing()
      .then(({ data }) => {
        dispatch(clothingLoaderSuccess(data));
      })
      .catch((error) => {
        dispatch(clothingLoaderFailed(error.message));
      });
  }, []);

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

  return (
    <>
      <div className="miniProd">
        <div>
          <h2 className="container">
            Clothing Page
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

        <div className="prodCardsNav container catalog">
          {loading && <Loader />}
          {isReady && (
            <Glider
              className="glider-container "
              draggable
              //rewind={true}
              //scrollLock
              hasArrows
              arrows={{
                prev: leftArrowEl.current,
                next: rightArrowEl.current,
              }}
              slidesToShow={4}
              slidesToScroll={1}
            >
              {clothing &&
                clothing.map((value, index) => (
                  <CatalogProdCard
                    value={value}
                    id={index}
                    key={index}
                  ></CatalogProdCard>
                ))}
            </Glider>
          )}
          {error && error}
        </div>
      </div>
    </>
  );
};
export default ClothingPage;
