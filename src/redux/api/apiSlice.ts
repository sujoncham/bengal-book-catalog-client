import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bengal-book-catalog-server.onrender.com/api/v1/books",
  }),
  tagTypes: ["comments"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/",
    }),
    singleProducts: builder.query({
      query: (id) => `/bookDetail/${id}`,
    }),
    singleProductComment: builder.query({
      query: (id) => `/comment/${id}`,
      providesTags: ["comments"],
    }),
    commentPost: builder.mutation({
      query: ({ id, data }) => ({
        url: `/comment/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["comments"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useSingleProductsQuery,
  useCommentPostMutation,
  useSingleProductCommentQuery,
} = api;
