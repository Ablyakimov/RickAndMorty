import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ISearch, ServerResponse } from "../../models/models";

export const rickAndMortyApi = createApi({
  reducerPath: "rickAndMorty/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rickandmortyapi.com/api/",
  }),
  endpoints: (build) => ({
    getCharacters: build.query<ServerResponse, ISearch>({
      query: (queryParams: ISearch) => ({
        url: "character",
        params: {
          ...queryParams,
        },
      }),
      transformResponse: (response: ServerResponse) => response,
    }),
  }),
});

export const { useGetCharactersQuery } = rickAndMortyApi;
