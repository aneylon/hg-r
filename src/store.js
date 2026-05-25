import { configureStore } from "@reduxjs/toolkit";
import counter from "../src/Components/Reduxed/counter/counterSlice";

export const store = configureStore({
  reducer: { counter },
});
