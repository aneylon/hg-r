import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchExample = createAsyncThunk("example/fetch", async () => {
  // TODO : Switch to AXIOS?
  const response = await fetch("http://localhost:4200/example");
  let data = [];
  console.log(response);

  await pause(1000);

  if (response.ok) {
    data = await response.json();
  }
  console.log(data);

  return data;
});

export { fetchExample };

const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};
