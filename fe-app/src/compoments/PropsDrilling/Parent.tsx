import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [name, setName] = useState("Ashish");

  return <Child name={name} age={12} setName={setName} />;
}

export default Parent;
