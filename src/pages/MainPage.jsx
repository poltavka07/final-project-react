import Promocode from "../components/Promocode";
import CategoriesCards from "../components/Categories_cards";
import ProductsCards from "../components/Product_cards";
import bp1 from "../img/bg/bigpic1.webp";
import bp2 from "../img/bg/bigpic2.webp";
// import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <h1 className="container">Main</h1>
      <Promocode />
      <CategoriesCards />
      <div className="miniProd">
        <h2 className="container">New arrivals</h2>
        <ProductsCards />
      </div>
      <div className="container">
        <img src={bp1} alt="girl" />
        <img src={bp2} alt="girl" />
      </div>
      <div className="miniProd">
        <h2 className="container">Our picks for you</h2>
        <ProductsCards />
      </div>
    </>
  );
};
export default MainPage;
