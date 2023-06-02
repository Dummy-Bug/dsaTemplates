import React from 'react';
import "./LandingPage.css";

const LandingPage = () => {
    return (
        <div className="home">
            <img src={gfg} alt="Gfg" className="logo" />
            <h1>Welcome to MockDude</h1>
            <p>Work Smart, not hard.</p>
        </div>
    );
};

export default LandingPage;