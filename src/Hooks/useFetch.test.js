import { renderHook, act } from "@testing-library/react";
import useFetch from "./useFetch";

global.fetch = jest.fn();
test("fetches data successfully", async () => {
  fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => ({ name: "John Doe" }),
  });
  const { result, waitForNextUpdate } = renderHook(() =>
    useFetch("https://api.example.com/user"),
  );
  expect(result.current.loading).toBe(true);
  await waitForNextUpdate();
  expect(result.current.loading).toBe(false);
  expect(result.current.data).toEqual({ name: "John Doe" });
  expect(result.current.error).toBe("");
});
test("handles error in fetching data", async () => {
  fetch.mockRejectedValueOnce(new Error("Failed to fetch"));
  const { result, waitForNextUpdate } = renderHook(() =>
    useFetch("https://api.example.com/user"),
  );
  expect(result.current.loading).toBe(true);
  await waitForNextUpdate();
  expect(result.current.loading).toBe(false);
  expect(result.current.data).toBeNull();
  expect(result.current.error).toBe("Failed to fetch");
});
