import React from 'react';
import "./LandingPage.css";
import pic1 from "./images/subTopics_pic.jpeg";
import list_pic2 from "./images/list_pic2.jpeg";
import topics_pic from "./images/topics_pic.jpeg";

//checking 

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
master
                    </div>
                </div>
            </div>


master
                </div>
            </div>

            <div className='container'>
                <div className='image-container'>
                    <img src={list_pic2} alt="Play Hard" className="center-image" />
                    <div className="text-container">
                        <p className='text'>Effortlessly Monitor Your DSA Progress with Interactive Question Tracking.</p>
                        <ol className='list'>
                            <li>Easily monitor and track your DSA progress.</li>
                            <li>Interactive question tracking for better monitoring.</li>
                            <li>Fuel your motivation by monitoring your progress.</li>
                        </ol>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default LandingPage;
