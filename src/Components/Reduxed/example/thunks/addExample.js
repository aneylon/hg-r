import { createAsyncThunk } from "@reduxjs/toolkit";

import { pause } from "./pause";

const addExample = createAsyncThunk("example/add", async (newExample) => {
  const response = await fetch("http://localhost:4200/example", {
    method: "POST",
    body: JSON.stringify(newExample),
    headers: {
      "Content-Type": "application/json",
    },
  });
  let data = null;

  await pause(1000);

  if (response.ok) {
    data = await response.json();
  }
  console.log({ data });

  return data;
});

export { addExample };
