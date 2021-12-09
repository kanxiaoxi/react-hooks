import { useState, useEffect, useMemo } from "react";
import axios from "axios";

const MemoDemo = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios.get("http://jsonplaceholder.typicode.com/comments").then((res) => {
      setData(res.data);
    });
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return null;
    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }
    console.log("这是在计算");

    return longestName;
  };

  const getLongestName = useMemo(() => findLongestName(data), [data]);

  return (
    <div>
      <div>{getLongestName}</div>

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

export default MemoDemo;
