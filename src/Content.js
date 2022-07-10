import { useState } from "react";
import { useEffect } from "react";
// 1 . useEffect(callback) :
// - gọi callback khi mỗi khi component re-render
// - gọi callback khi component thêm element vào DOM
// 2. useEffect(callback, [])
// - 
// 3. useEffect(callback,[deps])
// ---------------
// 1 . Callback is alwayls called after component mounted

const Content = () => {
  const [title, setTitle] = useState("");

  //   useEffect(() => {
  //     console.log("Mounted");
  //   });

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((posts) => console.log("data",posts));

  return (
    <div>
      <input value={title} />
    </div>
  );
};
export default Content;
