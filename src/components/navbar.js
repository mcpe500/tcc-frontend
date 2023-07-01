import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../styles/navbar.css'
import axios from 'axios';
import { serverURL } from '../config/env';
import { authenticated, logout } from '../utils/authentication'

const Navbar = () => {
  const [navbarState, setNavbarState] = useState(false);
  const navigate = useNavigate();

  const fetchUserData = async () => {
    try {
      setNavbarState(await authenticated());
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  fetchUserData();

  const handleLogout = () => {
    logout();
    return navigate("/");
  }
  const loggedInNavbar = () => {
    return (
      <>
        <li>
          <Link to="/editor" className='nav-link' onClick={fetchUserData}>Editor</Link>
        </li>
        <li>
          <Link to="/quiz" className='nav-link' onClick={fetchUserData}>Quiz</Link>
        </li>
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </>
    )
  }
  const notLoggedInNavbar = () => {
    return (
      <>
        <li>
          <Link to="/login" className='nav-link' onClick={fetchUserData}>Login</Link>
        </li>
        <li>
          <Link to="/register" className='nav-link' onClick={fetchUserData}>Register</Link>
        </li>
      </>
    )
  }

  return (
    <nav>
      <ul>
        {navbarState ? loggedInNavbar() : notLoggedInNavbar()}
      </ul>
    </nav>
  );
};

export default Navbar;