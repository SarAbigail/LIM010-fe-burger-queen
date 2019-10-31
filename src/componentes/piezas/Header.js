import React from 'react';
import '../../css/App.css'

import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="">
      <nav className="navbar">
        <ul className="nav-links">
          <li id="title"><a href="/">Burger Queen</a></li>
          <li className="nav-item"><Link to="/about">Mesero</Link></li>
          <li className="nav-item"><Link to="/cocina">Cocina</Link></li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
