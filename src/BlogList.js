const BlogList = (props) => {
  return (
    <div className="List_Blog">
      {props.data.map((e) => {
        return (
          <h1>
            {e.name} is {e.age}, the major : {e.major} , sologan : {e.sologan}
          </h1>
        );
      })}
    </div>
  );
};
export default BlogList;
