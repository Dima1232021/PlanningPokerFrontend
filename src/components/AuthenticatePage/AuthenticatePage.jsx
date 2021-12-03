import React, { useState } from "react";
import AuthForm from "./authForm/AuthForm";

import "./auth.scss";
import MenuBlock from "../MenuBlock/MenuBlock";

export default function AuthenticatePage() {
  const [auth, setAuth] = useState("Log in");

  return (
    <div className="auth">
      <div className="auth__form">
        <MenuBlock
          btn1="Log in"
          btn2="Sign up"
          value={auth}
          setValue={setAuth}
        />

        <AuthForm auth={auth} />
      </div>
    </div>
  );
}
