import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./fecher/auth/AtuthSlice";
import { productApi } from "./api/cart/cartApi";
import { addressApi } from "./api/user/AddressApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [productApi.reducerPath]: productApi.reducer,
    [addressApi.reducerPath]: addressApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware, addressApi.middleware),
});
