import { createReducer } from "@reduxjs/toolkit";

const clothingReducer = createReducer({ clothing: [] }, (builder) => {
  builder
    .addCase("CLOTHING_LOADER", (store) => {
      return { ...store, loading: true };
    })
    .addCase("CLOTHING_LOADER_SUCCESS", (store, action) => {
      return { ...store, ...{ loading: false }, clothing: action.payload };
    })

    .addCase("CLOTHING_LOADER_FAILED", (store, action) => {
      return { ...store, ...{ loading: false }, error: action.payload };
    });
});

export default clothingReducer;
