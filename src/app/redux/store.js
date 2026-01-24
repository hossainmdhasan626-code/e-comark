import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./fecher/auth/AtuthSlice";
import { productApi } from "./api/cart/cartApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
 