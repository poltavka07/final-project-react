import React from "react";
import ProductsCards2 from "../components/Product_cards copy 2";
import product from "../components/product";
//import { Glide, GlideProps } from "react-glide";
//import "react-glide/lib/reactGlide.css";

const SearchPage = () => {
  console.log("test");
  return <ProductsCards2 title={"New Arrivals"} data={product} a={0} b={8} />;
};
export default SearchPage;
