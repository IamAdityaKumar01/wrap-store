import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { cardList } from "../../utils/mockData";
import CaseCards from "../CaseCards";

it("should render CaseCard component with props data", () => {
  render(<CaseCards {...cardList[0]} />);

  const name = screen.getByText("SUPERHERO HYBRID HARD CAS");

  expect(name).toBeInTheDocument();
});
