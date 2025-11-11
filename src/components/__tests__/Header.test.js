import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

it("Should load Header component", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  const input = screen.getByRole("textbox");
  expect(input).toBeInTheDocument();
});

it("Should load 0 (items in cart) on Header component", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  const cartValue = screen.getByText("0");
  expect(cartValue).toBeInTheDocument();
});

it("Should click login button", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  const LoginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(LoginButton);
  expect(LoginButton).toBeInTheDocument();
});
