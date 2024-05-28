import React, { useState, createContext } from "react";
import ChildComponent from "./ChildComponent";
interface IContext {
  loginDetail: { userName: string; password: string };
  setLoginDetail: any;
}
const initialData: IContext = {
  loginDetail: {
    userName: "Ashish",
    password: "Password",
  },
  setLoginDetail: () => {},
};

// Create context
export const LoginContaxt = createContext(initialData);

const ContextParrentComponent = () => {
  const [loginDetail, setLoginDetail] = useState({
    userName: "Ashish",
    password: "Password",
  });

  return (
    // Provide context
    <LoginContaxt.Provider value={{ loginDetail, setLoginDetail }}>
      <ChildComponent />
    </LoginContaxt.Provider>
  );
};

export default ContextParrentComponent;
