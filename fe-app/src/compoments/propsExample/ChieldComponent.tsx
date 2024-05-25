import React, { useState } from "react";
interface IUser {
  name: string;
  age: number;
  getCount: any;
}
// 1. Access props using desctuction
// function ChieldComponent({ name, age }: IUser) {
//2. We receive passing props inside props object
function ChieldComponent(props: IUser) {
  //   console.log("props-->", props);
  const [count, setCount] = useState(0);

  const { name, age, getCount } = props;

  const increament = () => {
    setCount((prev) => prev + 1);
    getCount(count);
    // setCount(count + 1);
  };
  return (
    <div>
      Name :{name}
      <br />
      AGE:{age} <br />
      Count:{count} <br />
      <button onClick={increament}>Increament</button>
    </div>
  );
}

export default ChieldComponent;
