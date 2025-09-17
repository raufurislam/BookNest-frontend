import { baseApi } from "../baseApi";

export const borrowApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    borrowBook: builder.mutation<
      { success: boolean; message: string; data?: unknown },
      { book: string; quantity: number; dueDate: string }
    >({
      query: (payload) => ({
        url: "/borrow",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["BOOK", "BORROW"],
    }),
  }),
});

export const { useBorrowBookMutation } = borrowApi;
