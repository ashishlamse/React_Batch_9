import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState<number>(0);
  const [flag, setFlag] = useState<boolean>(false);

  const changeFlag = () => {
    setFlag(!flag);
  };

  // 1 way
  // useEffect(function () {});
  useEffect(() => {
    // 1.  here you will write the code which you wats to change, when state will change.
    // 2.  this will rereder once any state will change in this component or its parrent component.
    // 3.  whever component will render this or its parrent this will execute.
    console.log("Simple useEffect");
  });

  // //2 way
  // useEffect(() => {
  //   callMyAPI();
  //   // 1. this will call once at the time of component render
  //   console.log("Empty dependency");
  // }, []);

  // 3 way
  useEffect(() => {
    // 1. this will call once at the time of component render
    // 2. this willl get calll when your depency (which you pass in array as a sencond paramiter) will change
    console.log("with dependecy enjection");
  }, [flag]);

  return (
    <div className="App">
      {/* If you wnats to use js inside html here, you must write inside {} */}
      Count : {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={changeFlag}>ChangeFlag</button>
    </div>
  );
}

export default App;
