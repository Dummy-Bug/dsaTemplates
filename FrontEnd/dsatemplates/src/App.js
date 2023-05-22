import React, { useState } from 'react';
import Subjects from './Subjects';
import Topics from './Topics';
import './App.css';

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleSelectTopic = (topic) => {
    setSelectedTopic(topic);
  };

  return (
    <div className="App">
      <h1>Welcome to dsaTemplates</h1>
      {selectedTopic ? (
        <Topics topic={selectedTopic} />
      ) : (
        <Subjects onSelectTopic={handleSelectTopic} />
      )}
    </div>
  );
}

export default App;
