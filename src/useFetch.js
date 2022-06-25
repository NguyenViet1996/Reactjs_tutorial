import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [isPending, setPending] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("the program is having error");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setPending(true);
        })
        .catch((error) => {
          setPending(true);
          setError(error.message);
        });
    }, 2000);
  }, [url]);

  return { isPending, data, error };
};
export default useFetch;
