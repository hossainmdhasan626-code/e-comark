import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// eti ekhon khali, kintu mutation er maddhome amra ekhane data pathabo
let cartList = [];

export const addToCartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  tagTypes: ["Cart"],
  endpoints: (builder) => ({
    // Data pathanor jonno mutation use kora holo
    addToCart: builder.mutation({
      queryFn: (product) => {
        try {
          // Imuutable vabe data add kora
          cartList = [product, ...cartList];
          return { data: cartList }; // Success response
        } catch (error) {
          return { error: { status: 500, data: "Failed to add to cart" } };
        }
      },
      invalidatesTags: ["Cart"],
    }),

    // Cart er data dekhar jonno query thakte pare
    getCartItems: builder.query({
      queryFn: () => {
        return { data: cartList };
      },
      providesTags: ["Cart"],
    }),

    includesItemInCartList: builder.query({
      queryFn: (id) => {
        try {
          const isExist = cartList.some(
            (item) => Number(item.id) === Number(id),
          );
          return { data: isExist };
        } catch {
          return { error: { status: 500, data: "Error checking cart" } };
        }
      },
      providesTags: ["Cart"],
    }),
  }),
});

// Mutation er jonno 'use' + 'EndpointName' + 'Mutation'
export const {
  useAddToCartMutation,
  useGetCartItemsQuery,
  useIncludesItemInCartListQuery,
} = addToCartApi;
