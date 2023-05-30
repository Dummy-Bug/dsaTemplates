import axios from 'axios';
import React, { useState, useEffect } from 'react';
import "./Question.css";
import leetcodeLogo from "./leetcode-logo.png";

const Question = ({ topic, subTopic }) => {
  const [questions, setQuestions] = useState([]);

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
    if (question.questionLink.includes("leetcode")) {
      return (
        <a href={question.questionLink} target="_blank" rel="noopener noreferrer">
          <img src={leetcodeLogo} alt="LeetCode" className="leetcode-logo" />
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

  return (
    <div className="Questions">
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Question Link</th>
              <th>Difficulty</th>
              <th>Solution Link</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((question, index) => (
              <tr key={index}>
                <td>{question.title}</td>
                <td>{getQuestionLinkElement(question)}</td>
                <td>{question.difficulty}</td>
                <td>
                  <a href={question.solutionLink} target="_blank" rel="noopener noreferrer">
                    Solution Link
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Question;
