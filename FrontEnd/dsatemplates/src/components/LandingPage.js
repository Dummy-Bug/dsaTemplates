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
                <p>DSA Question Templates: Empowering Your Preparation, Your Roadmap to improve Problem Solving Proficiency</p>
            </div>

            <div className='contentWrapper'>
                <div className="homeLeft">
                    <div className='topicText'>
                        <p className='title'>Master Data Structures and Algorithms Topics with Targeted Practice Questions</p>
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
                                <li>Expand your knowledge and expertise  by delving into specific topics and solving practice problems tailored to each area.</li>
                            </ol>
                        </div>
                    </div>
                    <div className='subTopicText'>
                    <p className='title'>Explore subtopics based on templates to up your problem-solving abilities</p>
                    <div className='list'>
                            <ol>
                                <li>
                                Dive into subtopics for targeted practice.
                                </li>
                                <li>Enhance proficiency with subtopic-based exploration
                                </li>
                            </ol>
                        </div>
                    </div>
                   
                   <div className="topicText">
                    <p className='title'>Effortlessly Monitor Your DSA Progress with Interactive Question Tracking</p>
                    <div className='list'>
                            <ol>
                                <li>Easily monitor your progress in various data structures and algorithms topics</li>
                                <li>
                                    Keep track of the number of questions attempted and completed for each topic.
                                </li>
                                <li>
                                    Identify strengths and areas for improvement
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>

                <div className="homeRight">
                    <img src={topics_pic} alt="Hustle Hard" className= "pic1" />
                    <img className= "pic1" src={pic1} alt="Practice Hard"  />
                    <img className= "pic3" src={list_pic2} alt="Play Hard"  />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
