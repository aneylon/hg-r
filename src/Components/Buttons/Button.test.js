import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("renders custom button component", () => {
  render(<Button />);
  const linkElement = screen.getByText(/i am a button/i);
  expect(linkElement).toBeInTheDocument();
});
