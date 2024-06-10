import React, { useEffect, useRef, useState } from "react";

function UseRefExa() {
  //   const [count, setCount] = useState(0);
  const count = useRef(0);
  const [name, setName] = useState("");

  console.log("Count-->", count);

  useEffect(() => {
    count.current = count.current + 1;
    // setCount((prv) => prv + 1);
  });

  return (
    <div>
      Counter :{count.current}
      <br />
      <input
        type="text"
        onChange={(event: any) => setName(event.target.value)}
      />
      {name}
    </div>
  );
}

export default UseRefExa;
