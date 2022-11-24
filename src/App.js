import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import NewInPage from "./pages/NewInPage";
import CategoryPage from "./pages/CategoryPage";
import SearchPage from "./pages/SearchPage";
import ShoppingBagPage from "./pages/ShoppingBagPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductPage from "./pages/ProductPage";
// import HeaderNav from "./components/Header_Nav";
//import HeaderSearch from "./components/Header_search";
// import Promocode from "./components/Promocode";
// import CategoriesCards from "./components/Categories_cards";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/NewInPage" element={<NewInPage />} />
          <Route path="/CategoryPage" element={<CategoryPage />} />
          <Route path="/SearchPage" element={<SearchPage />} />
          <Route path="/ShoppingBagPage" element={<ShoppingBagPage />} />
          <Route path="/ProductPage" element={<ProductPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
