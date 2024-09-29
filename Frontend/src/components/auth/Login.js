import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import './Auth.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/voter/auth/login', { email, password });
            if (response && response.data) {
                setMessage(response.data.message);
                if (response.data.accessToken) {
                    localStorage.setItem('accessToken', response.data.accessToken);
                    navigate('/main'); // Redirect to MainPage after successful login
                }
            } else {
                setMessage('Unexpected error, please try again.');
            }
        } catch (error) {
            if (error.response && error.response.data) {
                setMessage(error.response.data.message);
            } else {
                setMessage('Server error, please try again later.');
            }
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
