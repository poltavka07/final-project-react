import React from "react";
// import "../pages/pageStyles/favoritePage.scss";
import { useSelector } from "react-redux";
import CatalogProdCard from "../components/catalogProdCards/catalog_Product_cards";
import heart from "../img/heart.webp";

const FavoritePage = () => {
  const favorites = useSelector((store) => store.favorites);

  if (favorites.length > 0) {
    return (
      <>
        <h3 className="favPage__title">Your favorite products:</h3>
        <div className="container favoritesCards ">
          {favorites.map((value, index) => (
            <CatalogProdCard
              value={value}
              id={index}
              key={`favor_${index}`}
            ></CatalogProdCard>
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <h1 className="favPage__title">Your favorite products will be here</h1>
      <img src={heart} alt="heart" className="cart_img" />
    </>
  );
};

export default FavoritePage;
