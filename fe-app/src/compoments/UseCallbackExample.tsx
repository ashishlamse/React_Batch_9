import React, { useState, useCallback } from "react";
import Printable from "./Printable";

const UseCallbackExample = () => {
  const [themeFlage, setThemeFlage] = useState<boolean>(false);
  const [num, setNum] = useState<number>(0);

  //1. useCallback is used for memoization in react
  //2. it will return memozed function.
  //3. it will stop recreations of function unneccessory when independent state change and react rerender.
  //4. it is responsible for efficiantlly exeaction of our react code
  //5. useCallback will received the parameter inside callback function that is optional
  //6. when we use useCallback, it's callback method will receive paramiter
  const calculateTable = useCallback(
    (param: number) => {
      console.log("Calulate call");
      const newVal = param + Number(num);
      return [newVal * 1, newVal * 2, newVal * 3, newVal * 4];
    },
    [num]
  );

  return (
    <div style={themeFlage ? { backgroundColor: "red" } : {}}>
      <input type="number" onChange={(e: any) => setNum(e.target.value)} />{" "}
      <br />
      <br />
      <Printable calculateTable={calculateTable} />
      <button onClick={() => setThemeFlage(!themeFlage)}>Change Theme</button>
    </div>
  );
};

export default UseCallbackExample;
