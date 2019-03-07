import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = (props) => {
  return (
    <header id="navbar">
      <ul className = "nav-ul">
        <li className="navLink">
          <Link to="/articles">HOME</Link>
        </li>
        <li className="navLink">
          <Link to="/categories/1">POLITICS</Link>
        </li>
        <li className="navLink">
          <Link to="/categories/2">SCIENCE</Link>
        </li>
        <li className="navLink">
          <Link to="/categories/3">TECHNOLOGY</Link>
        </li>
        <li className="navLink">
          <Link to="/categories/4">BUSINESS</Link>
        </li>
        <li className="navLink">
          <Link to="/categories/5">HUMAN INTEREST</Link>
        </li>

      </ul>
    </header>
  )
}

export default Navbar;
