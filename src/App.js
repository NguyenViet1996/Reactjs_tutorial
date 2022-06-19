import { useEffect, useState } from "react";
import "./App.css";
import BlogList from "./BlogList";

const url = "http://localhost:8000/datas";

function App() {
  const [loading, setLoading] = useState(false);
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
          setLoading(true);
        })
        .catch((error) => {
          setLoading(true);
          setError(error.message);
        });
    }, 2000);
  }, []);

  console.log(data);
  return (
    <div className="App">
      <h1>List of members</h1>
      {error && <div className="blog_error">{error}</div>}
      {!loading && <p>The List is loading.....</p>}
      {data && <BlogList data={data} />}
    </div>
  );
}

export default App;
