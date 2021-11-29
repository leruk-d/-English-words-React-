import React from "react";
import "./Header.scss";
import Logo from "../../assets/Logo.png";

function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="logo" />
      <nav className="header-menu">
        <ul className="menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Words List</a>
          </li>
          <li>
            <a href="#">Cards</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
