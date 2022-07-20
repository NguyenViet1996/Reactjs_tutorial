import { memo } from "react";

const Content = ({ count }) => {
  console.log("render");
  return <h1>The result is : {count}</h1>;
};
export default memo(Content);
