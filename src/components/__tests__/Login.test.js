import { render, screen } from "@testing-library/react";
import Login from "../Login";
import "@testing-library/jest-dom";
test("should load Login component", () => {
  render(<Login />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});
