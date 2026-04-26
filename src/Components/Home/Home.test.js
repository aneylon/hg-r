import { render, screen, fireEvent } from "@testing-library/react";

import { UserProvider, useUser } from "../../Context/UserContext";

import Home from "./Home";

test("Display the login component", () => {
  render(<Home />);
  const title = screen.getByText(/home/i);
  expect(title).toBeInTheDocument();
});
