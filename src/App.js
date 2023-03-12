import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComp from "./components/Header.js";
import FooterComp from "./components/Footer.jsx"; // default import
import { BodyComp, BodyComp1 } from "./components/Body"; // named import and importing multiple things
import * as Obj from "./components/Body"; // Importing multiple things

const AppLayout = () => {
  return (
    <>
      <HeaderComp />
      {/* <Obj.BodyComp /> */}
      <BodyComp />
      <FooterComp />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

/**
 * I can name my file as jsx
 * I can import using ./component/Header.js or ./component/Header.jsx or ./component/Header
 */
