import axios from 'axios';
import React, { useState, useEffect } from 'react';
import "./Topic.css";
import { Link } from 'react-router-dom';
import array from "./array.png";

const Topic = ({ onSelectTopic }) => {
  const [topics, setTopics] = useState([]);
  


  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await axios.get('http://localhost:8080/topics');
        setTopics(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTopics();
  }, []);

  return (
    <div className="topic-container">
      <div className="topic-card-container">
        {topics.map((topic, index) => (
          <div
            className="topic-card"
            key={index}
            onClick={() => onSelectTopic(topic)}
          >
            <Link to={`/practiceHub/${topic}`}>
            <div className='topic-icon'>
              <img  src={array} className='topic-pic' alt={topic}/>
              </div>
              <div className='topic-title'>
                <p className='topic-title-text'>{topic}</p>
                </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topic;
