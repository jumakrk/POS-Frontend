import React, { useState, useEffect } from 'react';
import './LoginForm.css'; // Import login form styling
import { Link, useHistory } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useFetch from './useFetch'; // Import the useFetch hook

const LoginForm = ({ switchToRegister }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const { data, error, loading, fetchData } = useFetch();
    const history = useHistory();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData('http://localhost:4000/api/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
    };

    useEffect(() => {
        if (data) {
            toast.success('Login successful', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            history.push('/dashboard'); // Redirect to dashboard upon successful login
        }

        if (error) {
            toast.error(error.message || 'Login failed. Please try again.', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }, [data, error, history]);

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
            <div className="switch">
                <p>Don't have an account? <Link to="/register">Register</Link></p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default LoginForm;
