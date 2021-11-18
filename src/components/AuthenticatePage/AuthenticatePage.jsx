import React, { useState } from "react";
import "./auth.scss";
import AuthForm from "./AuthForm";

export default function AuthenticatePage() {
  const [auth, setAuth] = useState("logIn");

  let classname = (value) =>
    value === auth ? "auth__link active" : "auth__link";

  return (
    <div className="auth">
      <div className="container">
        <div className="auth__row">
          <div className="auth__form">
            <nav className="auth__menu">
              <ul className="auth__list">
                <li
                  className={classname("logIn")}
                  onClick={() => setAuth("logIn")}
                >
                  Log in
                </li>
                <li
                  className={classname("signUp")}
                  onClick={() => setAuth("signUp")}
                >
                  Sign up
                </li>
              </ul>
            </nav>
            <AuthForm auth={auth} />
          </div>
        </div>
      </div>
    </div>
  );
}
