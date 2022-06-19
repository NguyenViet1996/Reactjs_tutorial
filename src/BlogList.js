const BlogList = (props) => {
  const { blogs, title, handleDeleteBlog } = props;
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-review" key={blog.old}>
          {blog.title}
          <h2>{blog.body}</h2>
          <button onClick={() => handleDeleteBlog(blog.old)}>delete blog</button>
        </div>
      ))}
    </div>
  );
};
export default BlogList;
