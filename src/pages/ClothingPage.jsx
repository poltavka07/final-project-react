import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clothingLoader,
  clothingLoaderFailed,
  clothingLoaderSuccess,
} from "../store/actions/clothingActions";
import { useEffect } from "react";
import { getClothing } from "../api/clothing";
import CatalogProdCard from "../components/catalog_Product_cards";
import Loader from "../components/loader/loader";

const ClothingPage = () => {
  const dispatch = useDispatch();
  const { loading, error, clothing } = useSelector((store) => store.clothing);
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
  return (
    <div>
      <h1 className="container"> Clothing Page</h1>

      <div className="miniProd">
        <div className="prodCardsNav container catalog">
          {loading && <Loader />}
          {clothing &&
            clothing.map((value, index) => (
              <CatalogProdCard
                value={value}
                id={index}
                key={index}
              ></CatalogProdCard>
            ))}
          {error && error}
        </div>
      </div>
    </div>
  );
};
export default ClothingPage;
