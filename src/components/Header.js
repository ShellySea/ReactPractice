import { Logo } from "./Logo";
import { useState } from "react";

function loggedInUser() {
  return true;
}

const HeaderComp = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
    <div className="header">
      {Logo}
      <ul className="navItems">
        <li>Contact</li>
        <li>About</li>
        <li>Cart</li>
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
