import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [isPending, setPending] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCort = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCort.signal });
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("the program is having error");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setPending(false);
        })
        .catch((error) => {
          if (error.name === "AbortError") {
            console.log("Fetch Abort");
          } else {
            setPending(true);
            setError(error.message);
          }
        });
    }, 1000);
    return () => {
      abortCort.abort();
    };
  }, [url]);

  return { isPending, data, error };
};
export default useFetch;
