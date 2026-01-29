import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

let localAddressList = [];

export const addressApi = createApi({
  reducerPath: "addressApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Address"], 
  endpoints: (builder) => ({
    // address-gula-niye-asa
    getAddress: builder.query({
      queryFn: () => ({ data: localAddressList }),
      providesTags: ["Address"],
    }),

    // notun-address-jog-kora
    addAddress: builder.mutation({
      queryFn: (newAddress) => {
        localAddressList = [newAddress];
        return { data: newAddress };
      },
      invalidatesTags: ["Address"],
    }),

    // puraton-address-update-kora
    updateAddress: builder.mutation({
      queryFn: (updatedAddress) => {
        localAddressList = localAddressList.map((addr) =>
          addr.id === updatedAddress.id ? updatedAddress : addr
        );
        return { data: updatedAddress };
      },
      invalidatesTags: ["Address"],
    }),

    // address-muche-fela
    deleteAddress: builder.mutation({
      queryFn: (id) => {
        localAddressList = localAddressList.filter((addr) => addr.id !== id);
        return { data: id };
      },
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