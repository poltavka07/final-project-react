import { configureStore } from "@reduxjs/toolkit";
import clothingReducer from "./reducers/clothingReducer";
import countReducer from "./reducers/countReducer";

const store = configureStore({
  reducer: {
    count: countReducer,
    catalog: clothingReducer,
  },
});

export default store;
