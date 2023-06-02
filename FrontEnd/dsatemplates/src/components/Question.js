import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Question.css';
import leetcodeLogo from './leetcode-logo.png';
import githubLogo from './github-logo.png';
import gfgLogo from "./gfg-logo.png";

const Question = ({ topic, subTopic }) => {
  const [questions, setQuestions] = useState([]);
  const [checkedQuestions, setCheckedQuestions]     = useState([]);
  const [progressPercentage, setProgressPercentage] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/topics/${topic}/${subTopic}`);
        setQuestions(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchQuestions();
  }, [topic, subTopic]);
  
  const getQuestionLinkElement = (question) => {
    if (question.questionLink.includes('leetcode')) {
      return (
        <a href={question.questionLink} target="_blank" rel="noopener noreferrer">
          <img src={leetcodeLogo} alt="LeetiCode" className="logo leetcode-logo" />
        </a>
      );
    }
    else if (question.questionLink.includes('geeksforgeeks')) {
      return (
        <a href={question.questionLink} target="_blank" rel="noopener noreferrer">
          <img src={gfgLogo} alt="geeksforgeeks" className="logo gfg-logo" />
        </a>
      );
    } else {
      return (
        <a href={question.questionLink} target="_blank" rel="noopener noreferrer">
          Question Link
        </a>
      );
    }
  };

  const getSolutionLinkElement = (question) => {
    if (question.solutionLink.includes('github')) {
      return (
        <a href={question.solutionLink} target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub" className="logo github-logo" />
        </a>
      );
    } else {
      return (
        <a href={question.solutionLink} target="_blank" rel="noopener noreferrer">
          Solution Link
        </a>
      );
    }
  };

  const handleCheckboxChange = (question) => {
    const isChecked = checkedQuestions.includes(question);
  
    let updatedCheckedQuestions = [];
  
    if (isChecked) {
      updatedCheckedQuestions = checkedQuestions.filter((q) => q !== question);
    } else {
      updatedCheckedQuestions = [...checkedQuestions, question];
    }
  
    setCheckedQuestions(updatedCheckedQuestions);
  };
  
  useEffect(() => {
    const progressPercentage = (checkedQuestions.length / questions.length) * 100;
  
    if (progressPercentage === 100) {
      // Tdo --> Make the batman fly
    } else {
      setProgressPercentage(progressPercentage);
    }
  }, [checkedQuestions, questions]);
  

  return (
    <div className="Questions">
      <div className="progress-bar" 
        style={{ width: `${progressPercentage}%` }}>
      </div>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th className="status-column">Status</th>
              <th className="title-column">Title</th>
              <th className="question-column">Problem</th>
              <th className="difficulty-column">Level</th>
              <th className="solution-column">Code</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((question, index) => (
              <tr key={index}>
                <td className="status-column">
                  <input
                    type="checkbox"
                    id={`checkbox-${index}`}
                    onChange={() => handleCheckboxChange(question)}
                  />
                  <label htmlFor={`checkbox-${index}`}></label>
                </td>
                <td className="title-column">{question.title}</td>
                <td className="question-column">{getQuestionLinkElement(question)}</td>
                <td className="difficulty-column" data-difficulty={question.difficulty}>
                  {question.difficulty}
                </td>
                <td className="solution-column">{getSolutionLinkElement(question)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Question;
