import React from "react";
import ReactDOM from "react-dom/client";

/**
 Layout
 Header
  - Logo
  - NavList (right side)
    - About
    - Contact
    - Cart
 Body
  - Search Bar
  - Restaurant Card
    - Image
    - Name
    - Rating
 Footer
  - Links
  - Copyright
 */

const Logo = (
  <img className="logo" 
  src="https://png.pngtree.com/element_our/png/20180823/health-restaurant-logo-design-template-vector-png_62798.jpg" 
  alt="logo"></img>
)

const HeaderComp = () => {
  return (
    <div className="header">
      {Logo}
      <ul className="navItems">
        <li>Contact</li>
        <li>About</li>
        <li>Cart</li>
      </ul>
    </div>
  )
}


/* 2 ways of applyling the style */
const stylingBody = {
  border: '1px solid pink',
}

const BodyComp = () => {
  return (
    <div style={stylingBody}>
      <h3 style={{color: 'red'}}>Body</h3>
    </div>
  )
}

const FooterComp = () => {
  return (
    <div>
      <h3>Footer</h3>
    </div>
  )
}

/* Instead of <React.Fragment>...</React.Fragment> we can just put <>...</> */
const AppLayout = () => {
  return (
    <React.Fragment>
      <HeaderComp/>
      <BodyComp/>
      <FooterComp/>
    </React.Fragment>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);

/*or
root.render({AppLayout()});
*/
