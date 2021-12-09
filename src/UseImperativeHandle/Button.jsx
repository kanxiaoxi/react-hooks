import { forwardRef, useImperativeHandle, useState } from "react";

const Button = forwardRef((props,ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));
  return (
    <>
      <button>子级Button</button>
      {toggle && <span>Toggle</span>}
    </>
  );
});

export default Button;
