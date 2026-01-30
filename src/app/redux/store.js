import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./fecher/auth/AtuthSlice";
import { productApi } from "./api/cart/cartApi";
import { addressApi } from "./api/user/AddressApi";
import { addToCartApi } from "./api/cart/AddtoCartApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [productApi.reducerPath]: productApi.reducer,
    [addressApi.reducerPath]: addressApi.reducer,
    [addToCartApi.reducerPath]: addToCartApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productApi.middleware,
      addressApi.middleware,
      addToCartApi.middleware,
    ),
});
