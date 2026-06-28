import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const addressApi = createApi({
  reducerPath: "addressApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "http://127.0.0.1:8000/api/v1",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Address"], 
  endpoints: (builder) => ({
    // address-gula-niye-asa
    getAddress: builder.query({
      query: () => "/user_address/",
      transformResponse: (response) => {
        if (!response || !response.success || !response.data) return [];
        return response.data.map((item) => ({
          id: item.id,
          user: item.user,
          country: item.country,
          city: item.city,
          district: item.district,
          upazila: item.upazila,
          address: item.street_address,
          addressLine2: item.street_address2,
          zipCode: item.zipcode,
          mobilePhone: item.phone,
        }));
      },
      providesTags: ["Address"],
    }),

    // notun-address-jog-kora
    addAddress: builder.mutation({
      query: (newAddress) => ({
        url: "/user_address/",
        method: "POST",
        body: {
          country: newAddress.country,
          city: newAddress.city,
          district: newAddress.district,
          upazila: newAddress.upazila,
          street_address: newAddress.address,
          street_address2: newAddress.addressLine2,
          zipcode: newAddress.zipCode,
          phone: newAddress.mobilePhone,
        },
      }),
      invalidatesTags: ["Address"],
    }),

    // puraton-address-update-kora
    updateAddress: builder.mutation({
      query: (updatedAddress) => ({
        url: `/user_address/${updatedAddress.id}/`,
        method: "PUT",
        body: {
          country: updatedAddress.country,
          city: updatedAddress.city,
          district: updatedAddress.district,
          upazila: updatedAddress.upazila,
          street_address: updatedAddress.address,
          street_address2: updatedAddress.addressLine2,
          zipcode: updatedAddress.zipCode,
          phone: updatedAddress.mobilePhone,
        },
      }),
      invalidatesTags: ["Address"],
    }),

    // address-muche-fela
    deleteAddress: builder.mutation({
      query: (id) => ({
        url: `/user_address/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: ["Address"],
    }),
  }),
});

export const {
  useGetAddressQuery,
  useAddAddressMutation,
  useUpdateAddressMutation,
  useDeleteAddressMutation,
} = addressApi;