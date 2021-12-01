import React from "react";
import "./Menu.scss";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <nav className="menu-links">
        <ul className="links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/wordsList">Words List</Link>
          </li>
          <li>
            <Link to="/game">Cards</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Menu;
