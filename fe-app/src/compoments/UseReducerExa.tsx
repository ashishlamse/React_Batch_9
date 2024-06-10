import React, { useReducer } from "react";
const initialState: any = { count: 0 };

function UseReducerExa() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    dispatch({ type: TYPE.Increment });
  };

  const decrement = () => {
    dispatch({ type: TYPE.Decrement });
  };

  return (
    <div>
      Counter : {state.count} <br />
      <button onClick={increment}>Increment</button> <br />
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

const TYPE = {
  Increment: "Increment",
  Decrement: "Decrement",
};

const reducer = (prevState: any, action: any) => {
  switch (action.type) {
    case TYPE.Increment:
      return { count: prevState.count + 1 };
    case TYPE.Decrement:
      return { count: prevState.count - 1 };
    default:
      return prevState;
  }
};

export default UseReducerExa;
