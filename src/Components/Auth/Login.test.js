import { render, screen, fireEvent } from "@testing-library/react";

import { UserProvider, useUser } from "../../Context/UserContext";

import Login from "./Login";

test("Display the login component", () => {
  render(<Login />);
  const title = screen.getByText(/log it in/i);
  expect(title).toBeInTheDocument();
});
