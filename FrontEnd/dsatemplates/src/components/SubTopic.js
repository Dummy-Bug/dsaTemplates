import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SubTopic.css';

const SubTopic = ({ topic, onSelectSubTopic }) => {
  const [subTopics, setSubTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubTopics = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/topics/${topic}`);
        setSubTopics(response.data);
        setLoading(false); // Set loading to false once the data is fetched
      } catch (error) {
        console.log(error);
      }
    };

    fetchSubTopics();
  }, [topic]);


  if (loading) {
    return <p>Loading...</p>; // Render a loading state while fetching data
  }

  return (
    <div className="subTopic-container">
      <div className="subTopic-card-container">
        {subTopics.map((subTopic, index) => (
          <div className="subTopic-card" key={index} onClick={() => onSelectSubTopic(subTopic)}>
            <Link to={`/practiceHub/${topic}/${subTopic}`}>
              <h1>{subTopic}</h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubTopic;
