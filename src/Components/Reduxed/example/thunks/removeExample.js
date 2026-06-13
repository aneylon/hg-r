import { createAsyncThunk } from "@reduxjs/toolkit";
import { pause } from "./pause";

const removeExample = createAsyncThunk("example/remove", async (item) => {
  console.log(item);
  await fetch(`http://localhost:4200/example/${item}`, {
    method: "DELETE",
  });

  await pause(1000);

  return item;
});

export { removeExample };
