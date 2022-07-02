import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    isPending,
    data: blog,
    error,
  } = useFetch("http://localhost:8000/data/" + id);

  const handleClick = () => {
    fetch("http://localhost:8000/data/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog_details">
      {isPending && <div className="blog_details_loading">Loading........</div>}
      {error && <div>{error}</div>}
      {blog && (
        <div>
          <h2>{blog.title}</h2>
          {blog.body}
        </div>
      )}
      <button onClick={handleClick}>Delete</button>
    </div>
  );
};
export default BlogDetail;
