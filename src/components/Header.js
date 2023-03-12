import { Logo } from "./Logo";

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
  );
};

export default HeaderComp;
