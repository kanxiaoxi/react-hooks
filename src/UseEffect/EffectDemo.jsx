import { useEffect, useState } from "react";
import axios from "axios";

const EffectDemo = () => {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get("http://jsonplaceholder.typicode.com/comments").then((res) => {
      // console.log(res.data);
      setData(res.data[0].email);
      console.log("API 被调用");
    });
  },[count]);
  return (
    <div>
      Hello World
      <h1>{data}</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>
        每次点击，API会被调用
      </button>{" "}
    </div>
  );
};

export default EffectDemo;
