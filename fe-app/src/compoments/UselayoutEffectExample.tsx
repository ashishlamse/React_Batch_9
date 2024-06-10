import React, { useEffect, useLayoutEffect, useState } from "react";

const UselayoutEffectExample = () => {
  const [flag, setFlag] = useState<boolean>(true);

  useLayoutEffect(() => {
    console.log("---useLayoutEffect-----");
    console.log("Line 1");

    console.log("Line 3");
  }, [flag]);

  useEffect(() => {
    console.log("---useEffect-----");
    console.log("Line 1");

    console.log("Line 3");
  }, [flag]);

  return (
    <div>
      <button
        onClick={(e: any) => {
          console.log("Hi", e);
          setFlag(!flag);
        }}
      >
        Change Flag
      </button>
      {flag ? <h2>Display User Message</h2> : null}
    </div>
  );
};

export default UselayoutEffectExample;
