import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComp from "./components/Header.js";
import FooterComp from "./components/Footer.jsx"; // default import
import { BodyComp } from "./components/Body"; // named import and importing multiple things
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Cart from "./components/Cart.js";
import Error from "./components/Error.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu.js";
import LoginPage from "./components/Login.js";
import ProfileFunction from "./components/ProfileFunc.js";
import ProfileClass from "./components/ProfileClass.js";

const AppLayout = () => {
  return (
    <>
      <HeaderComp />
      <Outlet></Outlet>
      <FooterComp />
    </>
  );
};

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <BodyComp />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profilefunc",
            element: <ProfileFunction />,
          },
          {
            path: "profileclass",
            element: <ProfileClass />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoutes} />);
