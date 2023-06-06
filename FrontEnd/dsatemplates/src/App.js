import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topic from "./components/Topic";
import SubTopic from "./components/SubTopic";
import Question from "./components/Question";
import "./App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Community from "./components/Community";

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
      <div className="components" >
        <Navbar/>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/community" element={<Community/>}/>
          <Route path="/practiceHub" element={<Topic onSelectTopic={onSelectTopic} />} />
          <Route path="/practiceHub/:topic" element={<SubTopic topic={topic} onSelectSubTopic={onSelectSubTopic} />} />
          <Route path="/practiceHub/:topic/:subtopic" element={<Question topic={topic} subTopic={subTopic} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
