import React from "react";
import UseEffectExa from "./compoments/UseEffectExa";
import UseEffectCleanUp from "./compoments/UseEffectCleanUp";
import ParrentComponent from "./compoments/propsExample/ParrentComponent";
import Parent from "./compoments/PropsDrilling/Parent";
import ContextParrentComponent from "./compoments/ContextExample/ContextParrentComponent";

function App() {
  return (
    <div>
      {/* <Parent /> */}
      <ContextParrentComponent />
      {/* <ParrentComponent /> */}
      {/* <UseEffectExa /> */}
      {/* <UseEffectCleanUp /> */}
    </div>
  );
}

export default App;
