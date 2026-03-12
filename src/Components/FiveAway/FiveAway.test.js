import { render, screen } from "@testing-library/react";
import FiveAway from "./FiveAway";

test("renders custom button component", () => {
  render(<FiveAway />);
  const title = screen.getByText(/five away/i);
  expect(title).toBeInTheDocument();
});
