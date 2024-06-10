import React, { useRef } from "react";

function UseRefExa2() {
  const myRef: any = useRef();

  const handleClick = () => {
    console.log("myRef-->", myRef);
    myRef.current.style.backgroundColor = "red";
    myRef.current.style.width = "400px";
  };

  return (
    <div>
      <h1>Ref Example</h1>
      <input type="text" ref={myRef} />
      <button onClick={handleClick}>Ref Button</button>
    </div>
  );
}

export default UseRefExa2;
