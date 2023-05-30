import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navContainer">
      <ul>
        <li>
          <Link to="/">MockDude</Link>
        </li>
        <li>
          <Link to="/practiceHub">PracticeHub</Link>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
        <li style={{ float: 'right' }}>
          <a className="active" href="#about">
            Sign In
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
