import React, { useState } from "react";
import ChieldComponent from "./ChieldComponent";

function ParrentComponent() {
  const [contValue, setContValue] = useState(0);

  const getCount = (count: number) => {
    console.log("parrent count-->", count);
    setContValue(count);
  };

  return (
    <div>
      Parrent Count :{contValue}
      <ChieldComponent name={"Ashish"} age={30} getCount={getCount} />
    </div>
  );
}

export default ParrentComponent;
