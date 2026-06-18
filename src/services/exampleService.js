import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const exampleApi = createApi({
  reducerPath: "exampleApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost/" }),
  endpoints: (builder) => ({
    // getExampleById: builder.query({
    //   query: (id) => `example/${id}`,
    // }),
    getExampleByText: builder.query({
      query: (text) => `example/text/#{text}`,
    }),
  }),
});
console.log("here", exampleApi);
export const { useGetExampleByTextQuery } = exampleApi;
