import { Logo } from "./Logo";
import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderComp = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
    <div className="header">
      <Link to="/">{Logo}</Link>
      <ul className="navItems">
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
      {isLoggedIn ? (
        <button
          onClick={() => {
            setisLoggedIn(false);
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            setisLoggedIn(true);
          }}
        >
          Log In
        </button>
      )}
    </div>
  );
};

export default HeaderComp;
