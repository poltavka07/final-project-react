import React from "react";
import { Link } from "react-router-dom";

const CatCard = ({ id, value }) => {
  return (
    <Link className="catCardsNav__item" to="/CategoryPage">
      <img src={require(`../img/categories/${id + 1}.webp`)} alt={value} />
      {value}
    </Link>
  );
};
const CategoriesCards = () => {
  return (
    <>
      <div className="catCardsNav hero">
        {["Dress", "Skirts", "Tops", "Bags", "Swimwear", "Shoes"].map(
          (value, index) => (
            <CatCard value={value} id={index} key={index}></CatCard>
          )
        )}
      </div>
    </>
  );
};
export default CategoriesCards;
