import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.list.push(action.payload);
    },
    removeItemAtIndex: (state, action) => {
      state.list.splice(action.payload, 1);
    },
  },
});

export const { addItem, removeItemAtIndex } = exampleSlice.actions;

export default exampleSlice.reducer;
