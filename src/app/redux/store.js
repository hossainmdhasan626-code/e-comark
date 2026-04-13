import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./fecher/auth/AtuthSlice";
import { productApi } from "./api/cart/cartApi";
import { addressApi } from "./api/user/AddressApi";
import { addToCartApi } from "./api/cart/AddtoCartApi";
import { authApi } from "./api/auth/AuthApi";
import { baseApiWithToken } from "./api/withToken/BaseApiWithToken";
import { carouselApi } from "./api/carousel/CarouselApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [productApi.reducerPath]: productApi.reducer,
    [addressApi.reducerPath]: addressApi.reducer,
    [addToCartApi.reducerPath]: addToCartApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [carouselApi.reducerPath]: carouselApi.reducer,
    [baseApiWithToken.reducerPath]: baseApiWithToken.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productApi.middleware,
      addressApi.middleware,
      addToCartApi.middleware,
      authApi.middleware,
      baseApiWithToken.middleware,
      carouselApi.middleware,
    ),
});
