import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TermsofUse from "./components/TermsofUse";
import Error from "./components/Error";
import Store from "./components/Store";
import { Outlet } from "react-router-dom";
import CasesOptions from "./components/CasesOptions";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => (
  <div className="container">
    <Header />
    <Outlet />
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/store",
        element: <Store />,
      },
      {
        path: "/termsofuse",
        element: <TermsofUse />,
      },
      {
        path: "/cases/:refId",
        element: <CasesOptions />,
      },
    ],
    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
