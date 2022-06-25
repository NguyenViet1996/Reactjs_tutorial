const BlogList = ({ blogs, title }) => {
  return (
    <div className="List_Blog">
      <h1>{title}</h1>
      {blogs.map((e) => {
        return (
          <div className="List_Blog_Item">
            <h2>
              {e.name} is {e.age}, the major : {e.major}
            </h2>
            <p>Project : {e.project}</p>
          </div>
        );
      })}
    </div>
  );
};
export default BlogList;
