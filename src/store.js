import { configureStore } from "@reduxjs/toolkit";
import counter from "../src/Components/Reduxed/counter/counterSlice";
import example from "./Components/Reduxed/example/exampleSlice";

export const store = configureStore({
  reducer: { counter, example },
});
