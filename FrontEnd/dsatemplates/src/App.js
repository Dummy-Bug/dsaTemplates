import React, { useState } from 'react';
import Subjects from './Subjects';
import Topics from './Topics';

import './App.css';

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleSelectTopic = (topic) => {
    setSelectedTopic(topic);
  };

  let content;
  if (selectedTopic) {
    content = <Topics topic={selectedTopic} />;
  } else {
    content = <Subjects onSelectTopic={handleSelectTopic} />;
  }

  return (
    <div className="App">
      <h1>Welcome to dsaTemplates</h1>
      {content}
    </div>
  );
}

export default App;
