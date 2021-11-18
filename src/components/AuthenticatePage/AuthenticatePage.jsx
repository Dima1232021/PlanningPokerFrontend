import React, { useState } from "react";
import "./auth.scss";
import AuthForm from "./AuthForm";

export default function AuthenticatePage() {
  const [auth, setAuth] = useState("logIn");

  let classname = (value) =>
    value === auth ? "auth__link active" : "auth__link";

  return (
    <div className="auth">
      <div className="auth__form">
        <ul className="auth__menu">
          <li className={classname("logIn")} onClick={() => setAuth("logIn")}>
            Log in
          </li>
          <li className={classname("signUp")} onClick={() => setAuth("signUp")}>
            Sign up
          </li>
        </ul>

        <AuthForm auth={auth} />
      </div>
    </div>
  );
}
