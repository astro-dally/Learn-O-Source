import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage() {
    return (
        <div className="background">
            <div className="landing-page-container">
                <div className="landing-page">
                    <h1 className="main-title">Learn-O-Source</h1>
                    <h2 className="title">Welcome to the world of Open-Source</h2>
                    <p className="description">
                        <span className="highlight">Learn-O-Source</span> is a platform that provides information about open source programs.
                    </p>
                    <Link to="/main" className="learn-button">Let's Learn</Link>
                </div>
            </div>
        </div>
    );
}
