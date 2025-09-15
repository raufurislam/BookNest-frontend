import type { IBook, IResponse } from "@/types";
import { baseApi } from "../baseApi";

export const bookApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query<IResponse<IBook[]>, void>({
      query: () => "/books",
      providesTags: ["BOOK"],
    }),
    getBookById: builder.query<{ data: IBook }, string>({
      query: (id) => `/books/${id}`,
      providesTags: ["BOOK"],
    }),
  }),
});

export const { useGetBooksQuery, useGetBookByIdQuery } = bookApi;
