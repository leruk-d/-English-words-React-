import React from 'react';
import './Header.scss'

function Header() {
    return (
    <header className="header">
   Let's learn English words with flashcards!
    <nav className="header-menu">
  <ul className="menu">
    <li><a href="#">Home</a></li>
    <li><a href="#">Words List</a></li>
    <li><a href="#">Cards</a></li>
  </ul>
</nav>
</header>
    )
}

export default Header;