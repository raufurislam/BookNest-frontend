import type { IResponse } from "@/types";
import { baseApi } from "../baseApi";

export const statsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getStats: builder.query<IResponse<unknown>, void>({
      query: () => "/stats",
    }),
  }),
});

export const { useGetStatsQuery } = statsApi;
