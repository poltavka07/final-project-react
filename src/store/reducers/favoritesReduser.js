import { createReducer } from "@reduxjs/toolkit";

const favoritesReducer = createReducer([], (builder) => {
  builder
    .addCase("FAVORITES_ADD", (store, { payload }) => {
      return [...store, payload];
    })
    .addCase("FAVORITES_REMOVE", (store, { payload }) => {
      const data = store.filter((item) => item.id !== payload.id);

      //[payload, store] = [data];

      // [payload, ...store] = [store];
      // const [removeItem] = store;

      return data;
    });
});

export default favoritesReducer;
