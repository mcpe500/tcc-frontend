import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { getToken, logout } from '../../utils/authentication';
import '../../styles/navbar.css';

const AdminNavbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    useEffect(() => {
        if (!getToken()) {
            navigate('/');
        }
    }, [navigate]);

    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/problems" className="nav-link" activeClassName="active" exact>
                                Problems
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/adminquiz" className="nav-link" activeClassName="active" exact>
                                Quiz
                            </NavLink>
                        </li>
                        <li>
                            <button onClick={handleLogout}>Logout</button>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default AdminNavbar;
