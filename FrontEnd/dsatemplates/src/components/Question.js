import axios from 'axios';
import React, { useState, useEffect } from 'react';
import "./Question.css";
import leetcodeLogo from "./leetcode-logo.png";
import githubLogo from "./github-logo.png";

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
          <img src={leetcodeLogo} alt="LeetCode" className="logo leetcode-logo" />
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
    if (question.solutionLink.includes("github")) {
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

  return (
    <div className="Questions">
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Question</th>
              <th>Difficulty</th>
              <th>Code</th>
            </tr>
          </thead>
          <tbody>
  {questions.map((question, index) => (
    <tr key={index}>
      <td>{question.title}</td>
      <td className="question-link-column">{getQuestionLinkElement(question)}</td>
      <td data-difficulty={question.difficulty}>{question.difficulty}</td>
      <td className="solution-link-column">{getSolutionLinkElement(question)}</td>
    </tr>
  ))}
</tbody>

        </table>
      </div>
    </div>
  );
};

export default Question;
