import React, { useContext } from "react";
import { LoginContaxt } from "./ContextParrentComponent";

export default function InnerChild() {
  const {
    loginDetail: { userName, password },
    setLoginDetail,
  } = useContext(LoginContaxt);

  const changeContext = () => {
    setLoginDetail({ userName: "Swati", password: "Password123" });
  };
  return (
    <div>
      UserName :{userName},
      <br />
      Password:{password}
      <br />
      <button onClick={changeContext}>Change Context</button>
    </div>
  );
}
