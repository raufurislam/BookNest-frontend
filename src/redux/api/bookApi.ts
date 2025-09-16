import type { IBook, IResponse } from "@/types";
import { baseApi } from "../baseApi";

export const bookApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBook: builder.mutation({
      query: (bookInfo) => ({
        url: "/books",
        method: "POST",
        body: bookInfo,
      }),
      invalidatesTags: ["BOOK"],
    }),

    getBooks: builder.query<IBook[], void>({
      query: () => "/books",
      providesTags: ["BOOK"],
      transformResponse: (response: IResponse<IBook[]>) => response.data,
    }),

    getBookById: builder.query<{ data: IBook }, string>({
      query: (id) => `/books/${id}`,
      providesTags: ["BOOK"],
    }),
  }),
});

export const { useAddBookMutation, useGetBooksQuery, useGetBookByIdQuery } =
  bookApi;
