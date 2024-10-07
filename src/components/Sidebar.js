import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaCashRegister, FaBox, FaUsers, FaUser, FaPowerOff } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>SwiftSell POS</h2>
            <ul>
                <li>
                    <Link to="/"><FaHome /> Home</Link>
                </li>
                <li>
                    <Link to="/sales"><FaCashRegister /> Sales</Link>
                </li>
                <li>
                    <Link to="/products"><FaBox /> Products</Link>
                </li>
                <li>
                    <Link to="/customers"><FaUsers /> Users</Link>
                </li>
                <li className='profile'>
                    <Link to="/profile"><FaUser /> Profile</Link>
                </li>
                <li>
                    <Link to="/logout"><FaPowerOff /> Logout</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
