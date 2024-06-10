import React, { useState, useMemo } from "react";

const UseMemoHookExa = () => {
  const [themeFlage, setThemeFlage] = useState(false);
  const [n, setN] = useState<number>(0);

  const expensiveFun = (n: number) => {
    console.log("expensiveFun");
    for (let i = 0; i < 1000000000; i++) {}
    return n;
  };

  // 1. useMemo hook is used for memoization.
  // useMemo sytax will be similer to useEffect first paramiter it will take as callback function, and second paramiter would be depen
  // dependency array
  // what is difference between ueeEffect useMemo?
  // useEffect will never return anything whereas useMemo will return memoized value.
  // 2. Usememo is used to improve performance of our react application.
  // 3. We can stop running unwanted functions on re-rendering
  // 4. useMemo will retun memoized value
  // 5. when we use useMemo, it's callback method will not receive any paramiter
  const calculatedval = useMemo(() => {
    return expensiveFun(n);
  }, [n]);

  return (
    <div style={themeFlage ? { backgroundColor: "red" } : {}}>
      <input type="number" onChange={(e: any) => setN(e.target.value)} /> <br />
      <h2>Function Result : {calculatedval} </h2>
      <br />
      <button onClick={() => setThemeFlage(!themeFlage)}>Change Theme</button>
    </div>
  );
};

export default UseMemoHookExa;
