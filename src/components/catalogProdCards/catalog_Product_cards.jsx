import React from "react";
import { Link } from "react-router-dom";
import { IconHeart } from "../Header_icons";
import "../catalogProdCards/catalogProdCards.scss";
import { useIncludeInFavorites } from "../customHook";

const CatalogProdCard = ({ value }) => {
  const { category, description, id, image, price, title } = value;
  const { inFavorites, toggleFavorites } = useIncludeInFavorites(
    value.id,
    value
  );

  return (
    <>
      <div className="catProdCardsNav__item catalog">
        <Link to={`/ProductPage/${id}`}>
          <img src={image} className="catProdCardsNav__img" alt={category} />
        </Link>
        <button
          className="catProdCardsNav__btn"
          onClick={() => {
            toggleFavorites();
          }}
        >
          <IconHeart
            myCl={`product_icon ${
              inFavorites() ? "product_icon_active" : null
            }`}
          />
        </button>

        <div className="catProdCardsNav__legend">
          <Link className="catProdCardsNav__item" to={`/ProductPage/${id}`}>
            <h3 className="catProdCardsNav__title" title={title}>
              {title}
            </h3>
            <span className="catProdCardsNav__text">{description}</span>
            <span className="catProdCardsNav__price">{price} $</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CatalogProdCard;
