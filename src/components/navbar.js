import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import '../styles/navbar.css';
import { logout, isAuthenticated } from '../utils/authentication';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header>
      <nav>
        <ul>
          {isAuthenticated ? (
            <>
              <li>
                <NavLink to="/editor" className="nav-link" activeStyle={{ fontWeight: "bold" }}>Editor</NavLink>
              </li>
              <li>
                <NavLink to="/quiz" className="nav-link" activeStyle={{ fontWeight: "bold" }}>Quiz</NavLink>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/login" className="nav-link" activeStyle={{ fontWeight: "bold" }}>Login</NavLink>
              </li>
              <li>
                <NavLink to="/register" className="nav-link" activeStyle={{ fontWeight: "bold" }}>Register</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
