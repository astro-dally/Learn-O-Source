import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Card.css';
import GSOCC from '../../assets/gsoc.png';
import outreachy from '../../assets/outreachy.png';
import MLH from '../../assets/MLH LOGO.jpg';
import sok from '../../assets/sok.png'
import tweag from '../../assets/tweag.svg'

export default function Card({ searchQuery }) {
    const cardData = [
        { title: 'Google Summer of Code', text: '746 open source organizations have mentored 18,000+ new GSoC contributors since 2005. Our mentoring organizations are eager to teach newcomers to open source about their communities and the thrill of open source development.', img: GSOCC, link: 'https://summerofcode.withgoogle.com/' },
        { title: 'Outreachy', text: 'Outreachy provides internships in open source and open science. Outreachy provides internships to people subject to systemic bias and impacted by underrepresentation in the technical industry where they are living.', img: outreachy, link: 'https://www.outreachy.org/' },
        { title: 'MLH Fellowship', text: 'A fully remote, 12-week internship alternative where participants earn a stipend and learn to collaborate on real open source projects with peers and engineers from top companies.', img: MLH, link: 'https://fellowship.mlh.io/' },
        { title: 'Season of KDE', text: 'Every year since 2013, KDE has been running Season of KDE (SoK) as a program similar to, but not quite the same as Google Summer of Code. SoK offers everyone an opportunity to participate in both code and non-code projects which benefit the KDE ecosystem.', img: sok, link: 'https://mentorship.kde.org/sok/' },
        { title: 'TWEAG', text: 'We are on a mission to improve developer experience (DX) and data-centric workflows (MLOps). Tweag is a collaborative space where engineers and researchers join forces to apply new ideas — all as open source.', img: tweag, link: 'https://www.tweag.io/' },
        // Add more card data as needed
    ];

    const filteredData = cardData.filter(card =>
        card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.text.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="card-container">
            {filteredData.map((card, index) => (
                <div className="card" key={index}>
                    <img src={card.img} className="card-img-top" alt={card.title} />
                    <div className="card-body">
                        <h5 className="card-title">{card.title}</h5>
                        <p className="card-text">{card.text}</p>
                        <a href={card.link} className="btn btn-primary">Learn More</a>
                    </div>
                </div>
            ))}
        </div>
    );
}
