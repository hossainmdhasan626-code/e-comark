import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ecomark-django.onrender.com/api/v1",
  }),
  endpoints: (builder) => ({
    // signUpErJonno
    signUp: builder.mutation({
      query: (newUser) => ({
        url: "/signup/",
        method: "POST",
        body: newUser,
      }),
    }),

    // signInErJOnno
    signIn: builder.mutation({
      query: (credential) => ({
        url: "/signin/",
        method: "POST",
        body: credential,
      }),
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation } = authApi;
