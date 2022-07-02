import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  console.log(blogs);
  return (
    <div className="List_Blog">
      <h1>{title}</h1>
      {blogs.map((blog) => {
        return (
          <div className="blog_preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p> Write by : {blog.author}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default BlogList;
