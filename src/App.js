import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComp from "./components/Header.js";
import FooterComp from "./components/Footer.jsx"; // default import
import { BodyComp } from "./components/Body"; // named import and importing multiple things
import About from "./components/About.js";
import Error from "./components/Error.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <HeaderComp />
      <BodyComp />
      <FooterComp />
    </>
  );
};

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoutes} />);
