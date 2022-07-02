import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(true);
  const history = useHistory();

  const handleSubmit = (e) => {
    console.log(e.target);
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(false);

    fetch("http://localhost:8000/data", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("add new blog");
      setIsPending(true);
    });
    // history.go(-1);
    history.push("/");
  };

  return (
    <div className="create">
      <h2>Add a new Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title :</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body :</label>
        <textarea
          type="text"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label>Blog author :</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value=""></option>
          <option value="Mario">Mario</option>
          <option value="Yoshi">Yoshi</option>
        </select>
        {isPending && <button>Add Blog</button>}
        {!isPending && <button>Add Blog is loading ...</button>}
      </form>
    </div>
  );
};
export default Create;
