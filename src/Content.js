import { useEffect, useState, useRef } from "react";

const Content = () => {
  const [number, setNumber] = useState(60);
  const count = useRef();
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = number;
  }, [number]);

  const handleStart = () => {
    count.current = setInterval(function () {
      setNumber((number) => number - 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(count.current);
  };

  console.log(number, prevCount.current);

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
    </div>
  );
};
export default Content;
