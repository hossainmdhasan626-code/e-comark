import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import CardData from "../../../../../data/CardData";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ecomark-django.onrender.com/api/v1",
  }),
  tagTypes: ["Default", "Filtar", "Search", "Details"],
  endpoints: (builder) => ({
    // etaSobCardErDataProvidKore
    getProducts: builder.query({
      query: () => "/product-category/",
      providesTags: ["Default"],
    }),

    // cardDetailsPageThekeParamsErIdTaNewThanOiIdOnuJaiCardErDataReturnKore
    getFilterProductsDetails: builder.query({
      query: (id) => `/products/${id}/`,
      providesTags: ["Details"],
    }),

    getProductsBySubCategory: builder.query({
      query: ({ cat_Id, sub_Id }) =>
        `/product-category/${cat_Id}/sub-category/${sub_Id}/products/`,
      providesTags: ["Filtar"],
    }),

    // searchThekeCartBerKora
    getProductsBySearch: builder.query({
      query: ({ search_params }) => `/products/?search=${search_params}`,
      providesTags: ["Search"],
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
  useGetProductsQuery,
  useGetFilterProductsDetailsQuery,
  useAddReviewMutation,
  useGetProductsBySearchQuery,
  useGetProductsBySubCategoryQuery,
} = productApi;
