import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import NewInPage from "./pages/NewInPage";
import CategoryPage from "./pages/CategoryPage";
import ShoppingBagPage from "./pages/ShoppingBagPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductPage from "./pages/ProductPage";
import ClothingPage from "./pages/ClothingPage";
import FavoritePage from "./pages/FavoritePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/NewInPage" element={<NewInPage />} />
          <Route path="/CategoryPage" element={<CategoryPage />} />
          <Route path="/ShoppingBagPage" element={<ShoppingBagPage />} />
          <Route path="/ProductPage/:id" element={<ProductPage />} />
          <Route path="/ClothingPage" element={<ClothingPage />} />
          <Route path="/FavoritePage" element={<FavoritePage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
