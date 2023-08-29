import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-list">
        <li><a href="#heroSection">Home</a></li>
        <li><a href="#aboutSection">About</a></li>
        <li><a href="#howToOrderSection">How to Order</a></li>
        <li><a href="#contactSection">Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
