import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { screen, render } from "@testing-library/react";

import "@testing-library/jest-dom";

it("should load Header component", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  const input = screen.getByRole("textbox");
});
