import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("renders custom button component", () => {
  render(<Button />);
  const linkElement = screen.getByText(/a button/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders custom button with passes properties", () => {
  render(<Button text="stuff" />);
  const button = screen.getByText(/stuff/i);
  expect(button).toBeInTheDocument();
});
