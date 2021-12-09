import { useEffect } from "react";

const Child = ({ returnComment }) => {
  useEffect(() => {
    console.log("函数被调用");
  }, [returnComment]);

  return <div>{returnComment("伍小帅")}</div>;
};

export default Child;
