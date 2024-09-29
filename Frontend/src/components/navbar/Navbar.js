import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css';

import { useNavigate } from 'react-router-dom';

export default function Navbar({ onSearch }) {
    const [searchInput, setSearchInput] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setSearchInput(event.target.value);
        onSearch(event.target.value);
    };
    const handleLogout = () => {
        // Remove the token from local storage
        localStorage.removeItem('accessToken');
        // Redirect to the landing page
        navigate('/');
    };


    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><span className='navbar-brand-name'>Learn-O-Source</span></a>
                <form className="d-flex" role="search">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        value={searchInput}
                        onChange={handleInputChange}
                    />
                    <button onClick={handleLogout} className="btn btn-outline-dark">Logout</button>
                </form>
            </div>
        </nav>
    );
}
