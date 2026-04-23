import { baseApiWithToken } from "../withToken/BaseApiWithToken";

export const profileApi = baseApiWithToken.injectEndpoints({
  endpoints: (builder) => ({
    // userErDataNeyarJonno
    getProfile: builder.query({
      query: () => "/profile/",
      providesTags: ["Profile"]
    }),

    // updateProfiel
    updateProfile: builder.mutation({
      query: ({id , ...rest}) => ({
        
        url: `/profile/${id}/`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags:["Profile"]
    }),
  }),
  overrideExisting: true,
});

export const { useGetProfileQuery, useUpdateProfileMutation } = profileApi;
