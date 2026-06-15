import { createAsyncThunk } from "@reduxjs/toolkit";

import { pause } from "./pause";

const one = "http://localhost:4200/example";
const two = "http://localhost:4200/example";

const addExample = createAsyncThunk("example/add", async (newExample) => {
  console.log("one", newExample);
  const response = await fetch("http://localhost:4200/example", {
    method: "POST",
    body: JSON.stringify(newExample),
    headers: {
      "Content-Type": "application/json",
    },
  });
  let data = null;
  console.log("two");
  await pause(1000);
  console.log("three");
  if (response.ok) {
    data = await response.json();
    console.log("data", { data });
  }
  console.log({ data });

  return data;
});

export { addExample };
