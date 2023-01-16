import React from "react";
import Promocode from "../components/Promocode";
import CategoriesCards from "../components/Categories_cards";
import ProductsCards from "../components/Product_cards";
import bp1 from "../img/bg/bigpic1.webp";
import bp2 from "../img/bg/bigpic2.webp";
import Exclusive from "../components/Exclusive";
import bp3 from "../img/bg/bigpic3_blue.webp";
import BrendBlock from "../components/BrendBlock";
import product from "../components/product";

const MainPage = () => {
  return (
    <>
      <Promocode />
      <CategoriesCards />
      <ProductsCards title={"New Arrivals"} data={product} a={0} b={8} />
      <div className="container">
        <img src={bp1} alt="girl" />
        <img src={bp2} alt="girl" />
      </div>
      <ProductsCards title={"Our picks for you"} data={product} a={9} b={16} />
      <Exclusive />
      <img className="baner" src={bp3} alt="girl" />
      <BrendBlock />
    </>
  );
};
export default MainPage;
