/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  BaseQueryFn,
  FetchArgs,
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";

import type { ApiResponse } from "@/models/Common";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  prepareHeaders: (headers: Headers) => {
    headers.set("Content-type", "application/json");

    headers.set("api_key", `${process.env.NEXT_PUBLIC_API_KEY}`);

    return headers;
  },
});

const baseQueryWithInterceptor: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const response = await baseQuery(args, api, extraOptions);
  const data = response.data as ApiResponse<any>;
  const error = response.error as FetchBaseQueryError;
  if (error && [401, 403].includes(error.status as number)) {
  }
  if (data) {
    if (data.status === 200) {
    }
  }
  return response;
};

export const api = createApi({
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({}),
  refetchOnReconnect: true,
});
