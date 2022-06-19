import { useEffect, useState } from "react";
import "./App.css";
import BlogList from "./BlogList";

const url = "http://localhost:8000/data";

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setData(data);
          setLoading(true);
        });
    }, 2000);
  }, []);

  console.log(data);
  return (
    <div className="App">
      <h1>List of members</h1>
      {!loading && <p>The List is loading.....</p>}
      {data && <BlogList data={data} />}
    </div>
  );
}

export default App;
