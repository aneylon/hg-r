import { configureStore } from "@reduxjs/toolkit";
import counter from "../src/Components/Reduxed/counter/counterSlice";
import example from "./Components/Reduxed/example/exampleSlice";

import { setupListeners } from "@reduxjs/toolkit/query";
import { exampleApi } from "./services/exampleService";

export const store = configureStore({
  reducer: { counter, example, [exampleApi.reducerPath]: exampleApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(exampleApi.middleware),
});

setupListeners(store.dispatch);
