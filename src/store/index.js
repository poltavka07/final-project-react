import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartReducer";
import clothingReducer from "./reducers/clothingReducer";
import favoritesReducer from "./reducers/favoritesReduser";

const store = configureStore({
  reducer: {
    catalog: clothingReducer,
    favorites: favoritesReducer,
    cart: cartReducer,
  },
});

export default store;
