import { createSlice } from "@reduxjs/toolkit";
import { fetchExample } from "./thunks/fetchExample";

const initialState = {
  isLoading: false,
  list: [],
  error: null,
};

export const exampleSlice = createSlice({
  name: "example",
  initialState,
  extraReducers(builder) {
    builder.addCase(fetchExample.pending, (state, action) => {
      console.log("pending", action);
      state.isLoading = true;
    });
    builder.addCase(fetchExample.fulfilled, (state, action) => {
      console.log("full", action);
      state.isLoading = false;
      state.list = action.payload;
    });
    builder.addCase(fetchExample.rejected, (state, action) => {
      console.log("rejected", action);
      state.isLoading = false;
      state.error = action.error;
    });
  },
  // reducers: {
  //   addItem: (state, action) => {
  //     state.list.push(action.payload);
  //   },
  //   removeItemAtIndex: (state, action) => {
  //     state.list.splice(action.payload, 1);
  //   },
  // },
});

export const { addItem, removeItemAtIndex } = exampleSlice.actions;

export default exampleSlice.reducer;
