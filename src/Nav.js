import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Nav.css'; // Assuming styles are stored in styles folder

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/booking">Reservation</Link></li>
        <li><Link to="/order">Order Online</Link></li>
        <li><Link to="/menu">Menu</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
