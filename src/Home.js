import useFetch from "./useFetch";
import BlogList from "./BlogList";
const Home = () => {
  const {
    isPending,
    data: blogs,
    error,
  } = useFetch("http://localhost:8000/data");
  return (
    <div className="home">
      {error && <div className="blog_error">{error}</div>}
      {isPending && <p>The List is loading.....</p>}
      {blogs && <BlogList blogs={blogs} title="All blogs!" />}
    </div>
  );
};
export default Home;
