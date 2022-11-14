import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import pic0 from "../img/categories/1.webp";
// import pic1 from "../img/categories/2.webp";
// import pic2 from "../img/categories/3.webp";
// import pic3 from "../img/categories/4.webp";
// import pic4 from "../img/categories/5.webp";
// import pic5 from "../img/categories/6.webp";

const CatCard = ({ id, setHover, value }) => {
  // let picName = "pic".concat(id);

  return (
    <Link className="catCardsNav__item" to="/CategoryPage">
      <img src={require(`../img/categories/${id + 1}.webp`)} alt={value} />
      {value}
    </Link>
  );
};
const CategoriesCards = () => {
  const [hover, setHover] = useState();

  return (
    <>
      <div className="catCardsNav hero">
        {["Dress", "Skirts", "Tops", "Bags", "Swimwear", "Shoes"].map(
          (value, index) => (
            <CatCard
              value={value}
              id={index}
              setHover={setHover}
              key={index}
            ></CatCard>
          )
        )}
      </div>
    </>
  );
};
export default CategoriesCards;
