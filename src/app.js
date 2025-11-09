import { Suspense, lazy } from "react";
import Cart from "./components/Cart";
import FAQ from "./components/FAQ";
import { useState } from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TermsofUse from "./components/TermsofUse";
import Error from "./components/Error";
import Store from "./components/Store";
import { Outlet } from "react-router-dom";
import CaseCardsOptions from "./components/CaseCardsOptions";
import Login from "./components/Login";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Categories = lazy(() => import("./components/Categories"));
const AppLayout = () => {
  let [inputVal, setInputVal] = useState("");
  return (
    <div className="container">
      <UserContext.Provider value={{ inputVal, setInputVal }}>
        <Header />
        <Outlet />
      </UserContext.Provider>
    </div>
  );
};

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
        path: "/cart",
        element: <Cart />,
      },

      {
        path: "/store",
        element: <Store />,
      },
      {
        path: "/categories",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Categories />
          </Suspense>
        ),
      },
      {
        path: "/FAQ",
        element: <FAQ />,
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
  {
    path: "/login",
    element: <Login />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
