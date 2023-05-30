import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SubTopic = ({ topic, onSelectSubTopic }) => {
  const [subTopics, setSubTopics] = useState([]);

  useEffect(() => {
    const fetchSubTopics = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/topics/${topic}`);
        setSubTopics(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSubTopics();
  }, [topic]);

  return (
    <div className="container">
      <div className="card-container">
        {subTopics.map((subTopic, index) => (
          <div className="card" 
            key={index} 
            onClick={() => onSelectSubTopic(subTopic)}>
            <Link to={`/${topic}/${subTopic}`}>
              <h2>
                {subTopic}
              </h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubTopic;
