import axios from 'axios';
import React, { useState, useEffect } from 'react';
import "./Topic.css";

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
          <div className="card" 
          key={index} 
          onClick={() => onSelectTopic(topic)}>
            <h2>{topic}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topic;
