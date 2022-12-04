import { createAction } from "@reduxjs/toolkit";

const clothingLoader = createAction("CLOTHING_LOADER");
const clothingLoaderSuccess = createAction("CLOTHING_LOADER_SUCCESS");
const clothingLoaderFailed = createAction("CLOTHING_LOADER_FAILED");

export { clothingLoader, clothingLoaderSuccess, clothingLoaderFailed };
