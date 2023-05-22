import React, { useEffect, useState } from 'react';
import './Subjects.css';
import axios from 'axios';

const Subjects = ({ onSelectTopic }) => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await axios.get('http://localhost:8080/getAllSubjects');
        console.log(response);
        setSubjects(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSubjects();
  }, []);

  return (
    <div className="container">
      <h1>Subjects</h1>
      <div className="card-container">
        {subjects.map((subject, index) => (
          <div className="card" key={index} onClick={() => onSelectTopic(subject)}>
            <h2>{subject}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subjects;
