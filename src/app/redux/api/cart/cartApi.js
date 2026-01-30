import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import CardData from "../../../../../data/CardData";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    // etaSobCardErDataProvidKore
    getProducts: builder.query({
      queryFn: () => {
        try {
          return { data: CardData };
        } catch (error) {
          return { error: { status: 500, data: "Data loading failed" } };
        }
      },
    }),

    // cardDetailsPageThekeParamsErIdTaNewThanOiIdOnuJaiCardErDataReturnKore
    getFilterProducts: builder.query({
      queryFn: (id) => {
        try {
          const filtered = CardData.find(
            (product) => product.id === Number(id),
          );

          if (!filtered) {
            return { error: { status: 404, data: "Product not found" } };
          }

          return { data: filtered };
        } catch (error) {
          return { error: { status: 500, data: "Server Error" } };
        }
      },
    }),

    // reviewAddKorleEkhanThekeCardDataTeAddKoraHoy
    addReview: builder.mutation({
      queryFn: (newReview, id) => {
        const updatedReview = CardData.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              reviews: [newReview, ...product.reviews],
            };
          }
          return product;
        });
        alert(JSON.stringify(updatedReview));
        return updatedReview;
      },
    }),
  }),
});

export const {
  useLazyGetProductsQuery,
  useGetFilterProductsQuery,
  useAddReviewMutation,
} = productApi;
