import { useState } from "react";
import "./App.css";
import ContentImage from "./ContentImage";
// import Count from "./Count";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      {/* <button onClick={() => setShow(!show)}>Toggle</button> */}
      {/* {show && <Content />} */}
      {/* <button onClick={() => setShow(!show)}>Start</button>
      {show && <Count />} */}
      <button onClick={() => setShow(!show)}>See image</button>
      {show && <ContentImage />}
    </div>
  );
}

export default App;
