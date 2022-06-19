import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [name, setName] = useState("viet");
  const [blogs, setBlogs] = useState([
    { title: "chelsea", body: "championship", coach: "Tuchel", old: 45 },
    {
      title: "Man city",
      body: "King of dom",
      coach: "Sir Alexreguson",
      old: 68,
    },
    { title: "Mu", body: "Legendary", coach: "Mourinho", old: 55 },
  ]);

  const handleDeleteBlog = (old) => {
    const newBlogs = blogs.filter((blog) => blog.old !== old);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("use effect");
  }, [name]);

  return (
    <div className="Home">
      <BlogList
        blogs={blogs}
        title="List of Clubs"
        handleDeleteBlog={handleDeleteBlog}
      />
      <p>{name}</p>
      <button onClick={() => setName("tai")}>change name</button>
    </div>
  );
};
export default Home;
