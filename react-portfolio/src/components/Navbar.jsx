import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/style.css'; // Ensure this path is correct

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">About</Link></li>
        <li><Link to="/my-work">My Work</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/resume">Resume</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
