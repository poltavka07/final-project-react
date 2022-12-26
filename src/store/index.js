import { configureStore } from "@reduxjs/toolkit";
import clothingReducer from "./reducers/clothingReducer";
import countReducer from "./reducers/countReducer";
import favoritesReducer from "./reducers/favoritesReduser";

const store = configureStore({
  reducer: {
    count: countReducer,
    catalog: clothingReducer,
    favorites: favoritesReducer,
  },
});

export default store;
