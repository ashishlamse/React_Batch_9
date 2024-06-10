import React, { useState, useEffect } from "react";

const Parrent = () => {
  const [a, setA] = useState(0);

  //componentDidMount
  useEffect(() => {}, []);

  //componentDidUpdate
  useEffect(() => {}, [a]);

  useEffect(() => {});
  return (
    <div>
      A:{a}
      <Child setA={setA} />
    </div>
  );
};

const Child = (props: any) => {
  return (
    <div>
      <button
        onClick={() => {
          props.setA(10);
        }}
      ></button>
    </div>
  );
};
export default Parrent;
