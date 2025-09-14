import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from "@/config";

export const baseApi = createApi({
  reducerPath: "baseApi",
  // baseQuery: axiosBaseQuery(),
  baseQuery: fetchBaseQuery({
    baseUrl: config.baseUrl,
    credentials: "include",
  }),
  tagTypes: ["BOOK", "BORROW"],
  endpoints: () => ({}),
});
