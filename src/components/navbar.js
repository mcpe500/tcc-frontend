import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/navbar.css'

const Navbar = () => {
  
  return (
    <nav>
      <ul>
        <li>
          <Link to="/login" className='nav-link'>Login</Link>
        </li>
        <li>
          <Link to="/register" className='nav-link'>Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
