import React, { useState } from 'react';
import './LoginForm.css'; // Import login form styling
import { Link } from 'react-router-dom';
import useFetch from './useFetch'; // Import the useFetch hook

const LoginForm = ({ switchToRegister }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const { /*data,*/ error, loading } = useFetch('http://localhost:4000/api/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // No need to handle submission here, it's done by useFetch hook
    };

    return (
        <div className="form-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                />
                <button type="submit" disabled={loading}>Login</button>
            </form>
            {error && <div>Error: {error.message}</div>}
            <div className="switch">
                <p>Don't have an account? <Link to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default LoginForm;
