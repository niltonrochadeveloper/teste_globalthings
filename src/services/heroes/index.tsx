/* eslint-disable @typescript-eslint/no-explicit-any */
import { setHeroes } from "@/lib/store";
import { ApiResponse } from "@/models/Common";
import type { Heroes } from "@/models/types/heroes";
import { api } from "@/services/api";

export const heroesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getHeroes: build.query<ApiResponse<Heroes[]>, void>({
      query: () => ({
        url: "/Heroes",
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        const { data }: any = await queryFulfilled;
        if (data.result && data.status == 200) {
          dispatch(setHeroes(data.result));
        }
      },
    }),
  }),
  overrideExisting: false,
});

export const { useLazyGetHeroesQuery } = heroesApi;
