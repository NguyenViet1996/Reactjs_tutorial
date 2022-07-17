import { useEffect, useState } from "react";

const Count = () => {
  const [countdown, setCountdown] = useState("180");

  useEffect(() => {
    const number = setInterval(() => {
      setCountdown((prev) => prev - 1);
      console.log("countdown", countdown);
    }, 1000);
    return () => clearInterval(number);
  });

  return <h1>{countdown}</h1>;
};
export default Count;
