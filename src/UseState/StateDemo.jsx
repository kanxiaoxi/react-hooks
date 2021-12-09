import { useState } from "react";

const StateDemo = () => {
  const [inputValue, setInputValue] = useState("Hello");

  const onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };
  return (
    <div>
      <input placeholder="请输入一些东西..." onChange={onChange}></input>
      {inputValue}
    </div>
  );
};

export default StateDemo;
