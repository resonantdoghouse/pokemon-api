import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav className="primary-nav container">
        <NavLink to="/" className="primary-nav__link" exact>
          Home
        </NavLink>
        <NavLink to="/pokemon" className="primary-nav__link">
          Pokemon
        </NavLink>
        <NavLink to="/about" className="primary-nav__link">
          About
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
