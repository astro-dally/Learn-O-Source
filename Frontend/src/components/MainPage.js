import React, { useState } from 'react';
import Navbar from './Navbar';
import './MainPage.css';
import Card from './Card';

export default function MainPage() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    return (
        <div className="main-page">
            <Navbar onSearch={handleSearch} />
            <Card searchQuery={searchQuery} />
        </div>
    );
}
