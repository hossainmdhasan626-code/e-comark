import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import CardData from "../../../../../data/CardData";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getProducts: builder.query({
      queryFn: () => {
        try {
          return { data: CardData };
        } catch (error) {
          return { error: { status: 500, data: "Data loading failed" } };
        }
      },
    }),
  }),
});

export const { useLazyGetProductsQuery } = productApi;
