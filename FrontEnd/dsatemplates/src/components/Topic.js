import axios from 'axios';
import React, { useState, useEffect } from 'react';
import "./Topic.css";
import { Link } from 'react-router-dom';

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
    <div className="container">
      <div className="card-container">
        {topics.map((topic, index) => (
          <div className="card" key={index} onClick={() => onSelectTopic(topic)}>
            <Link to={`/${topic}`}>
              <h1>{topic}</h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topic;
