import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Topics.css';

const Topics = ({ topic }) => {
  const [topicData, setTopicData] = useState([]);

  useEffect(() => {
    const fetchTopicData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/getAllSubjects/${topic}`);
        console.log(response);
        setTopicData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTopicData();
  }, [topic]);

  return (
    <div className="container">
      <h1>{topic}</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {topicData.map((question, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{question}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Topics;
