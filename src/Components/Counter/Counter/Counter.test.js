import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Counter from "./Counter";

test("render counter component", () => {
  render(<Counter />);
  const text = screen.getByText(/the count is/i);
  expect(text).toBeInTheDocument();
});

test("clicking add updates the count", async () => {
  render(<Counter />);
  const count = screen.getByTestId("count");
  expect(count).toBeInTheDocument();
  expect(count).toHaveTextContent("0");

  const add = screen.getByText(/add/i);

  await userEvent.click(add);

  expect(count).toHaveTextContent("1");
});
