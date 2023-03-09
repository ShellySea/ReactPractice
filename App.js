import React from "react";
import ReactDOM from "react-dom/client";


/* React element */
const Title = (
  <h1 className="h3" key="head3">React Element</h1>
)

/* React component - Normal JS function*/
const Comp = () => {
  return (
    <div>
      <h3>Component Composition</h3>
    </div>
  )
}

/* React Component: std convention to write its name is by starting with capital letter */
/* using react element inside react component using {} */
/* COMPONENT COMPOSITION : Using react component inside react component using </> or {Nameofcomp()} */
const HeaderComponent1 = () => {
  return (
    <div>
      {Title}
      <Comp/> 
      {Comp()}
      <h1>Heading 1</h1>
      <h1>Heading 2</h1>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent1/>);
