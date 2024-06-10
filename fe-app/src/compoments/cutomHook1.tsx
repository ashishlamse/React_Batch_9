import React from "react";
import useFetch from "./customHooks/useFetch";

function CutomHook1() {
  const resData = useFetch("https://jsonplaceholder.typicode.com/users");
  return (
    <div>
      <h1>Document 1</h1>
      {resData.map((ele: any) => {
        return (
          <>
            {ele.id}. {ele.name}
            <br />
          </>
        );
      })}
    </div>
  );
}

export default CutomHook1;
