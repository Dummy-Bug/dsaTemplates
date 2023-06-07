import React from 'react';
import "./LandingPage.css";
import pic1 from "./subTopics_pic.jpeg";
import list_pic2 from "./list_pic2.jpeg";
import topics_pic from "./topics_pic.jpeg";

const LandingPage = () => {
    return (
        <div className="homeContainer">
            <div className='homeHeading'>
                <h1>Code Better</h1>
                <p>Work hard smartly.</p>
            </div>

            <div className='homeTagLine'>
                <p>DSA Question Templates: Empowering Your Preparation, Your Roadmap to Problem Solving Proficiency.</p>
            </div>

            <div className='contentWrapper'>
                <div className="homeLeft">
                    <div className='topicText'>
                        <p className='title'>Master Data Structures and Algorithms Topics with Targeted Practice Questions.</p>
                        <div className='list'>
                            <ol>
                                <li>
                                    Strengthen understanding with focused practice questions.
                                </li>
                                <li>
                                    Achieve proficiency in data structures and algorithms topics.
                                </li>
                                <li>
                                    Prepare effectively with topic-wise practice questions.
                                </li>
                            </ol>
                        </div>
                    </div>
                    <p className='title'>Explore subtopics based on templates to enhance your problem-solving abilities.</p>
                    <p className='title'>Effortlessly Monitor Your DSA Progress with Interactive Question Tracking.</p>
                </div>

                <div className="homeRight">
                    <p className='pic1Text'>Topic Wise content</p>
                    <img src={topics_pic} alt="Hustle Hard" className="pic1" />
                    <p className='pic2Text'>Glimpse of templates</p>
                    <img src={pic1} alt="Practice Hard" className="pic1" />
                    <p className='pic3Text'>Progress tracker</p>
                    <img src={list_pic2} alt="Play Hard" className="pic1" />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
