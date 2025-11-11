import { render, screen } from "@testing-library/react";
import Login from "../Login";
import "@testing-library/jest-dom";

describe("Testing for Login component", () => {
  test("should load Login component", () => {
    render(<Login />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("should load all buttons in Login component", () => {
    render(<Login />);

    const button = screen.getAllByRole("button");

    expect(button.length).toBe(4);
  });
});
