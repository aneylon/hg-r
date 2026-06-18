import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const exampleApi = createApi({
  reducerPath: "exampleApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost/" }),
  endpoints: (builder) => ({
    getExampleById: builder.query({
      query: (id) => `example/${id}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery } = exampleApi;
