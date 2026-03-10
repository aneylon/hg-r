import { render, screen, fireEvent } from "@testing-library/react";

import { UserProvider, useUser } from "../../Context/UserContext";

import Greeting from "./Greeting";

const renderWithContext = (ui, value) => {
  console.log({ value });
  return render(<UserProvider value={value}>{ui}</UserProvider>);
};

test("displays login prompt when no user is logged in", () => {
  renderWithContext(<Greeting />, { user: null });
  expect(screen.getByText(/please log in/i)).toBeInTheDocument();
});

test("displays personalized greeting when user is logged in", () => {
  renderWithContext(<Greeting />, { user: { name: "Steve Jones" } });
  expect(screen.getByText(/hello, john doe/i)).toBeInTheDocument();
});

test("updates greetings after login", () => {
  const { rerender } = renderWithContext(<Greeting />, { user: null });
  expect(screen.getByText(/please log in/i)).toBeInTheDocument();
  rerender(<Greeting />, { user: { name: "Stevie Jonsey" } });
  expect(screen.getByText(/hello, stevie jonsey/i)).toBeInTheDocument();
});
