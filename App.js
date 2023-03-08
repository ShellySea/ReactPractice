import React from "react";
import ReactDOM from "react-dom/client";

/* Using React.createElement */
const heading = React.createElement(
  "h1",
  {
    id: "title1",
    key: 'heading1'
  },
  "Heading"
);

/* Using JSX */
const heading1 = (
  <h1 className="h3" key="head3">Heading 1</h1>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading1);
