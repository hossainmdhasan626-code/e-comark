import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const carouselApi = createApi({
  reducerPath: "carouselApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ecomark-django.onrender.com/api/v1",
  }),
  endpoints: (builder) => ({
    // carouselErDatarJonno
    getCarouselData: builder.query({
      query: () => "/hero-carousel-items/",
    }),
  }),
});

export const { useGetCarouselDataQuery } = carouselApi;
