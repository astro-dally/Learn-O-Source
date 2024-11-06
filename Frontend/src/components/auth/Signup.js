// Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import './Auth.css';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://learn-o-source.onrender.com/api/voter/auth/signup', { name, email, password });
            if (response && response.data) {
                setMessage(response.data.message);
                toast.success('Signup successful! Redirecting to login.'); // Show success toast
                navigate('/login');
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
