import React, { useState } from "react";
import MenuBlock from "../../components/menuBlock/MenuBlock";
import AuthForm from "../../components/auth/AuthForm";

import "./auth.scss";

export default function Auth() {
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
