import { createReducer } from "@reduxjs/toolkit";

const cartReducer = createReducer([], (builder) => {
  builder
    .addCase("CART_ADD", (store, { payload }) => {
      return [...store, payload];
    })
    .addCase("CART_ITEM_PATCH", (store, { payload }) => {
      return [
        ...store.map((item) => {
          if (item.itemId === payload.itemId) {
            return { ...item, count: payload.count };
          }
          return item;
        }),
      ];
    })
    .addCase("CART_REMOVE", (store, { payload }) => {
      const data = store.filter((item) => item.itemId !== payload.itemId);
      return data;
    })
    .addCase("CART_REMOVE_ALL", (store, { payload }) => {
      return [];
    });
});

export default cartReducer;
