import "./App.css";
import Content from "./Content";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(60);
  const [number, setNumber] = useState(10);
  console.log(count);
  return (
    <div className="App">
      <Content count={count} />
      <h1>{number}</h1>
      <button onClick={() => setCount(count - 1)}>Change result</button>
      <button onClick={() => setNumber(number - 1)}>Change number</button>
    </div>
  );
}

export default App;
