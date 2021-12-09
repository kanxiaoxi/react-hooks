import { useRef } from "react";

const RefDemo = () => {
  const inputRef = useRef(null);
  const onClick = () => {
    inputRef.current.value = "";
  };
  return (
    <div>
      <h1>Ref Hook</h1>
      <input type="text" ref={inputRef} placeholder="..." />
      <button onClick={onClick}>清除输入内容</button>
    </div>
  );
};

export default RefDemo;
