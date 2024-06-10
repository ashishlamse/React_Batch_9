import React from "react";
import useFetch from "./customHooks/useFetch";

function CutomHook2() {
  const resData = useFetch("https://jsonplaceholder.typicode.com/posts");
  return (
    <div>
      <h1>Document 2</h1>
      {resData.map((ele: any) => {
        return (
          <>
            {ele.id}. {ele.title}
            <br />
          </>
        );
      })}
    </div>
  );
}

export default CutomHook2;
