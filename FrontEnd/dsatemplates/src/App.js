import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topic from "./components/Topic";
import SubTopic from "./components/SubTopic";
import Question from "./components/Question";

function App() {
  const [topic, setTopic] = useState(null);
  const [subTopic, setSubTopic] = useState(null);

  const onSelectTopic = (selectedTopic) => {
    setTopic(selectedTopic);
  };

  const onSelectSubTopic = (selectedSubTopic) => {
    setSubTopic(selectedSubTopic);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <h1>Welcome to dsaTemplates</h1>
        <Routes>
        <Route path="/" element={<Topic onSelectTopic={onSelectTopic} />} />
          <Route path="/:topic" element={<SubTopic topic={topic} onSelectSubTopic={onSelectSubTopic} />} />
          <Route path="/:topic/:subtopic" element={<Question topic={topic} subTopic={subTopic} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
