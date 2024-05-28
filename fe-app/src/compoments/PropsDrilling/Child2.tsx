import React from "react";
import { Iprops } from "./Child";

// props are read only we can change props
function child2({ name, age, setName }: Iprops) {
  const perAct = () => {
    setName("Pooja");
  };

  return (
    <div>
      name : {name}
      <br />
      age :{age}
      <button onClick={perAct}>Change Text</button>
    </div>
  );
}

export default child2;
