import React, { useState, useEffect } from 'react';
import './LoginForm.css'; // Import login form styling
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import useFetch from './useFetch'; // Import the useFetch hook

const LoginForm = ({ switchToRegister }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const { data, error, loading } = useFetch();
    const history = useHistory();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("Submitting login form...");
            const response = await axios.post('http://localhost:4000/api/user/loginUser', formData);
            console.log("Login response:", response.data);
            toast.success('Login successful');
            // Redirect to dashboard after a delay to ensure toast appears
            setTimeout(() => {
                history.push('/dashboard');
            }, 1000);
        } catch (error) {
            console.error("Error logging in:", error);
            toast.error(error.response?.data?.message || 'Error logging in');
        }
    };

    useEffect(() => {
        if (data) {
            toast.success('Login successful', {
                position: "top-right", // Fix position here
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
                position: 'top-right', // Fix toast position here
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
        </div>
    );
};

export default LoginForm;
