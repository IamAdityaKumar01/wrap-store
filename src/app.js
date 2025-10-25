import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TermsofUse from "./components/TermsofUse";
import Error from "./components/Error";
import Store from "./components/Store";
import { Outlet } from "react-router-dom";
import CaseCardsOptions from "./components/CaseCardsOptions";
import Shimmer from "./components/Shimmer";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Categories = lazy(() => import("./components/Categories"));
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
        path: "/categories",
        element: (
          <Suspense
            fallback={
              <h1>
                <Shimmer />
              </h1>
            }
          >
            <Categories />
          </Suspense>
        ),
      },
      {
        path: "/termsofuse",
        element: <TermsofUse />,
      },
      {
        path: "/cases/:refId",
        element: <CaseCardsOptions />,
      },
    ],
    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
