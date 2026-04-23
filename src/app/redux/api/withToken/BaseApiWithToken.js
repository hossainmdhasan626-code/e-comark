import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApiWithToken = createApi({
  reducerPath: "baseApiWithToken",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ecomark-django.onrender.com/api/v1",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.access;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes:["Profile"],
  endpoints: () => ({}),
});
