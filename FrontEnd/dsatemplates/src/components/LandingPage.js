import React from 'react';
import "./LandingPage.css";
import pic1 from "./homepage_pic1.jpeg";
import list_pic2 from "./list_pic2.jpeg";

const LandingPage = () => {
    return (
        <div className="home">
            <h1>Welcome to MockDude</h1>
            <p>Work hard smartly.</p>
            <div className='home1'>
                <p>DSA Question Templates:Empowering Your Preparation, Your Roadmap to Problem Solving Proficiency.</p>
            </div>
            <div className="home2">
                <p>Glimpse of templates</p>
                <img src={pic1} alt="Practice Hard" className="pic1" />
            </div>
            <div className="home2">
                <p>Track your progress</p>
                <img src={list_pic2} alt="Play Hard" className="pic1" />
            </div>
        </div>
    );
};

export default LandingPage;