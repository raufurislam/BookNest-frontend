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

    getBooks: builder.query<
      IBook[],
      {
        limit?: number;
        filter?: string;
        sortBy?: string;
        sort?: "asc" | "desc";
      } | void
    >({
      query: (args) => {
        const params = new URLSearchParams();
        if (args && typeof args === "object") {
          if (args.limit !== undefined) params.set("limit", String(args.limit));
          if (args.filter) params.set("filter", args.filter);
          if (args.sortBy) params.set("sortBy", args.sortBy);
          if (args.sort) params.set("sort", args.sort);
        }
        const qs = params.toString();
        return `/books${qs ? `?${qs}` : ""}`;
      },
      providesTags: ["BOOK"],
      transformResponse: (response: IResponse<IBook[]>) => response.data,
    }),

    getBookById: builder.query<{ data: IBook }, string>({
      query: (id) => `/books/${id}`,
      providesTags: ["BOOK"],
    }),

    deleteBook: builder.mutation<void, string>({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["BOOK"],
    }),
  }),
});

export const {
  useAddBookMutation,
  useGetBooksQuery,
  useGetBookByIdQuery,
  useDeleteBookMutation,
} = bookApi;
