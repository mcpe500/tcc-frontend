import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getToken } from '../utils/authentication';
import '../styles/navbar.css';
import AdminNavbar from './admincomponents/AdminNavbar';

const AdminPanel = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!getToken()) {
            navigate('/');
        }
    }, [navigate]);

    return (
        <>
            <AdminNavbar />
            <div>users</div>
            <div>problems</div>
            <div>user notification</div>
            <div>report</div>
            <div>admin log</div>
            <div>admin</div>
        </>
    );
};

export default AdminPanel;
