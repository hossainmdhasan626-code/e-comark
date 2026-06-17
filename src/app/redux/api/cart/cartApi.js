import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import CardData from "../../../../../data/CardData";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    // etaSobCardErDataProvidKore
    getProducts: builder.query({
      queryFn: async () => {
        try {
          const response = await fetch("http://127.0.0.1:8000/api/v1/product-category/");
          const data = await response.json();
          
          const allProducts = [];
          if (data?.results) {
            data.results.forEach((category) => {
              category.sub_categories?.forEach((subCategory) => {
                subCategory.products?.forEach((product) => {
                  allProducts.push(product);
                });
              });
            });
            return { data: allProducts };
          } else {
            // Fallback to local data if API structure doesn't match
            return { data: CardData };
          }
        } catch (error) {
          // Fallback to local data if API fails
          return { data: CardData };
        }
      },
    }),

    // cardDetailsPageThekeParamsErIdTaNewThanOiIdOnuJaiCardErDataReturnKore
    getFilterProducts: builder.query({
      queryFn: async (id) => {
        try {
          const response = await fetch("http://127.0.0.1:8000/api/v1/product-category/");
          const data = await response.json();
          
          let filtered = null;
          if (data?.results) {
            data.results.forEach((category) => {
              category.sub_categories?.forEach((subCategory) => {
                subCategory.products?.forEach((product) => {
                  if (product.id === Number(id)) {
                    filtered = product;
                  }
                });
              });
            });
          }

          // Fallback to local data if not found in API
          if (!filtered) {
            filtered = CardData.find((product) => product.id === Number(id));
          }

          if (!filtered) {
            return { error: { status: 404, data: "Product not found" } };
          }

          return { data: filtered };
        } catch (error) {
          // Fallback to local data if API fails
          const filtered = CardData.find((product) => product.id === Number(id));
          if (!filtered) {
            return { error: { status: 404, data: "Product not found" } };
          }
          return { data: filtered };
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
        return { data: updatedReview };
      },
    }),
  }),
});

export const {
  useLazyGetProductsQuery,
  useGetFilterProductsQuery,
  useAddReviewMutation,
} = productApi;
