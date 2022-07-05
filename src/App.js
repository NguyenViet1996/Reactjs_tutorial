import { useState } from "react";
import "./App.css";

function App() {
  const [content, setContent] = useState("");
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem("jobs"));
    return storageJobs;
  });

  const handleSave = () => {
    setJobs((prev) => {
      const newJobs = [...prev, content];

      // save data into localStorage
      const saveJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", saveJobs);
      return newJobs;
    });
    setContent("");
  };

  return (
    <div className="App">
      <input
        style={{ margin: 5 }}
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button onClick={handleSave}>Add</button>
      <ul className="content">
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
