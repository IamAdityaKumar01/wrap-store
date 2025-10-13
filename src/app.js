import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TermsofUse from "./components/TermsofUse";
import Error from "./components/Error";
const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => (
  <div className="container">
    <Header />
    <Body />
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "/termsofUse",
    element: <TermsofUse />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
