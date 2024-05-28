import React from "react";
import Child2 from "./Child2";
export interface Iprops {
  name: string;
  age: number;
  setName: (name: string) => void;
}

function Child({ name, age, setName }: Iprops) {
  return <Child2 name={name} age={age} setName={setName} />;
}

export default Child;
