import React, { useState } from 'react';
import './RegisterForm.css'; // Import register form styling
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import useFetch from './useFetch'; // Import the useFetch hook

const RegisterForm = ({ switchToLogin }) => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const { error, loading, fetchData } = useFetch();
    const history = useHistory(); // Use useHistory to navigate

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Call the fetchData function with the registration endpoint and form data
            await fetchData('http://localhost:4000/api/user/addUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            // If no error occurred during registration, display success toast
            toast.success('User Registered successfully', {
                position: "top-right",
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                onClose: () => {
                    history.push('/login'); // Redirect to login page after the toast closes
                }
            });
        } catch (error) {
            // If an error occurred during registration, display error toast
            toast.error(error.message || 'User Registration failed.', {
                position: 'top-right',
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <div className="form-container">
            <h2>Register</h2>
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
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
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
                <button type="submit" disabled={loading}>Register</button>
            </form>
            {error && <div>Error: {error.message}</div>}
            <div className="switch">
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default RegisterForm;
