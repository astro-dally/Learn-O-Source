// Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import './Auth.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://learn-o-source.onrender.com/api/voter/auth/login', { email, password });
            if (response && response.data) {
                setMessage(response.data.message);
                if (response.data.accessToken) {
                    localStorage.setItem('accessToken', response.data.accessToken);
                    toast.success('Login successful!'); // Show success toast
                    navigate('/main');
                }
            } else {
                toast.error('Unexpected error, please try again.');
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Server error, please try again later.';
            setMessage(errorMessage);
            toast.error(errorMessage); // Show error toast
        }
    };

    return (
        <div className="auth-container">
            <form onSubmit={handleLogin} className="auth-form neon-form">
                <h2>Login</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="auth-input neon-input"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="auth-input neon-input"
                />
                <button type="submit" className="neon-button">Login</button>
                {message && <p className="auth-message neon-text">{message}</p>}

                <p className="signup-prompt">Not signed in? <Link to="/signup" className="signup-link">Sign up</Link></p>
            </form>
        </div>
    );
};

export default Login;
