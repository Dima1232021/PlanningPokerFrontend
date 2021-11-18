import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login, create } from "../../actions/authenticate";

export default function AuthForm({ auth }) {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function authLog() {
    dispatch(login(email, password));
  }

  function authCreate() {
    dispatch(create(username, email, password, passwordConfirmation));
  }

  if (auth === "logIn") {
    return (
      <>
        <h2 className="auth__title">Log in</h2>
        <div className="auth__block">
          <input
            type="email"
            placeholder="Email"
            className="auth__input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="auth__input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={authLog} className="auth__btn">
            Log in
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <h2 className="auth__title">Authenticate</h2>
      <div className="auth__block">
        <input
          type="text"
          placeholder="Username"
          className="auth__input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="auth__input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="auth__input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="auth__input"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <button onClick={authCreate} className="auth__btn">
          Create account
        </button>
      </div>
    </>
  );
}
