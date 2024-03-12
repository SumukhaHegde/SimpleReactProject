import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { LeftTreePane } from "./components/LeftPane";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Profile from "./components/Profile";
import Cart from "./components/Cart";
import HeaderBody from "./components/HeaderBody";
import ResMenu from "./components/ResMenu";

const Grocery = lazy(() => {
  return import("./components/Grocery");
});

const AppContainer = () => {
  return (
    <div>
      <LeftTreePane />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppContainer />,
    children: [
      {
        path: "/",
        element: <HeaderBody />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/home",
        element: <HeaderBody />,
      },
      {
        path: "/orders",
        element: <Cart />,
      },
      {
        path: "/signup",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <ResMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
