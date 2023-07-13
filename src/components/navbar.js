import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import '../styles/navbar.css';
import { isAuthenticated, logout } from '../utils/authentication';

const Navbar = () => {
  const [loginState, setLoginState] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    handleClick()
  }, [])

  const handleLogout = () => {
    logout();
    setLoginState(false);
    navigate('/');
  };

  const handleClick = async () => {
    setLoginState(await isAuthenticated());
  };

  return (
    <header>
      <nav>
        <ul>
          {loginState ? (
            <>
              <li>
                <NavLink onClick={handleClick} to="/editor" className="nav-link" activeClassName="active" exact>Editor</NavLink>
              </li>
              <li>
                <NavLink onClick={handleClick} to="/quiz" className="nav-link" activeClassName="active" exact>Quiz</NavLink>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink onClick={handleClick} to="/login" className="nav-link" activeClassName="active" exact>Login</NavLink>
              </li>
              <li>
                <NavLink onClick={handleClick} to="/register" className="nav-link" activeClassName="active" exact>Register</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
