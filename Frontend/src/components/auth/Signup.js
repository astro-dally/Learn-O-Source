import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import './Auth.css';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/api/voter/auth/signup', { name, email, password });
            if (response && response.data) {
                setMessage(response.data.message);
                // Redirect to the login page after successful signup
                navigate('/login');
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
            <form onSubmit={handleSignup} className="auth-form neon-form">
                <h2>Signup</h2>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="auth-input neon-input"
                />
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
                <button type="submit" className="neon-button">Signup</button>
                {message && <p className="auth-message neon-text">{message}</p>}
            </form>
        </div>
    );
};

export default Signup;
