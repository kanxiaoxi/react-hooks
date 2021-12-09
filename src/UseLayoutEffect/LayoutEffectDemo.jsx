import { useLayoutEffect, useEffect, useRef } from "react";

const LayoutEffectDemo = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.value = "useLayoutEffect Demo";
  }, []);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  return (
    <div>
      <input
        ref={inputRef}
        defaultValue="HELLO"
        style={{ width: 400, height: 60 , marginBottom: 20}}
      ></input>
    </div>
  );
};

export default LayoutEffectDemo;
