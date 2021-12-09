import { useRef } from "react";
import Button from "./Button";

const ImperativeHandle = () => {
  const buttonRef = useRef(null);

  return (
    <div>
      <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        父级的Button
      </button>
      <Button ref={buttonRef} />
    </div>
  );
};

export default ImperativeHandle;
