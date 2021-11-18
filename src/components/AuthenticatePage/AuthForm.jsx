import React, { useState } from "react";

export default function AuthForm({ auth }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  if (auth === "logIn") {
    return (
      <>
        <h2 className="auth__title">Log in</h2>
        <div className="auth__block">
          <input type="email" placeholder="Email" className="auth__input" />
          <input
            type="password"
            placeholder="Password"
            className="auth__input"
          />
          <button className="auth__btn">Log in</button>
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
          placeholder="Email"
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
        <button className="auth__btn">Create account</button>
      </div>
    </>
  );
}
