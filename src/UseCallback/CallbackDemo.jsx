import axios from "axios";
import { useState, useCallback } from "react";
import Child from "./Child";

const CallbackDemo = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("你好😀");

  const returnComment = useCallback(
    (name) => {
      // 计算部分
      return data + name;
    },
    [data]
  );
  return (
    <div>
      <Child returnComment={returnComment} />
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        切换状态
      </button>
      {toggle && <h1>toggle</h1>}
    </div>
  );
};

export default CallbackDemo;
