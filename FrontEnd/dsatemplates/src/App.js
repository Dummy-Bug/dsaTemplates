import { useState } from "react";
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

  if (!topic) {
    return (
      <div className="App">
        <h1>Welcome to dsaTemplates</h1>
        <Topic onSelectTopic={onSelectTopic} />
      </div>
    );
  } else if (!subTopic) {
    return (
      <div className="App">
        <h1>{topic}</h1>
        <SubTopic
          topic={topic}
          onSelectSubTopic={onSelectSubTopic}
        />
      </div>
    );
  } else {
    return (
      <div className="App">
        <h1>{subTopic}</h1>
        <Question 
        topic={topic}
        subTopic={subTopic}/>
      </div>
    );
  }
}

export default App;
