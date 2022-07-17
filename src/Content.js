import { useState } from "react";
import { useEffect } from "react";
// 1 . useEffect(callback) :
// - gọi callback khi mỗi khi component re-render
// - gọi callback khi component thêm element vào DOM
// 2. useEffect(callback, [])
// - chỉ gọi callback một lần sau khi component amounted
// 3. useEffect(callback,[deps])
// - callback sẽ được gọi lại mỗi khi deps thay đổi
// ---------------
// 1 . Callback is alwayls called after component mounted
// 2. Cleanup function luôn được gọi khi component unmounted
// 3. Cleanup function luôn được gọi trước khi callback được gọi ( trừ lần amounted)

const tabs = ["posts", "comments", "albums"];

const Content = () => {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  const [backTop, setBackTop] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => setPosts(posts));
  }, [type]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setBackTop(true);
      } else {
        setBackTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const scrollFunction = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setType(tab)}
          style={type === tab ? { color: "#fff", backgroundColor: "#333" } : {}}
        >
          {tab}
        </button>
      ))}
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title || post.body}</li>
        ))}
      </ul>
      {backTop && (
        <button
          style={{ padding: 10, position: "fixed", right: 10, bottom: 30 }}
          onClick={scrollFunction}
        >
          Scroll to Top
        </button>
      )}
    </div>
  );
};
export default Content;
