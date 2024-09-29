import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import './MainPage.css';
import Card from '../card/Card';
import Footer from '../footer/Footer';

export default function MainPage() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    return (
        <div className="main-page">
            <Navbar onSearch={handleSearch} />
            <Card searchQuery={searchQuery} />
            <Footer />
        </div>
    );
}
