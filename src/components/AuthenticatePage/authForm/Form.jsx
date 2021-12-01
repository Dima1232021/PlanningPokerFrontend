import React from "react";

export default function Form({
  username = false,
  email = false,
  password = false,
  pasConf = false,
  authCreate = false,
  authLogIn = false,
}) {
  return (
    <div className="auth__block">
      {username && (
        <input
          type="text"
          placeholder="Username"
          className="auth__input"
          value={username.value}
          onChange={(e) => username.onChange(e)}
          onBlur={username.outputError}
        />
      )}

      {email && (
        <input
          type="email"
          placeholder="Email"
          className="auth__input"
          value={email.value}
          onChange={(e) => email.onChange(e)}
          onBlur={email.outputError}
        />
      )}

      {password && (
        <input
          type="password"
          placeholder="Password"
          className="auth__input"
          value={password.value}
          onChange={(e) => password.onChange(e)}
          onBlur={password.outputError}
        />
      )}

      {pasConf && (
        <input
          type="password"
          placeholder="Password Confirmation"
          className="auth__input"
          value={pasConf.value}
          onChange={(e) => pasConf.onChange(e)}
          onBlur={pasConf.outputError}
        />
      )}

      {authCreate && (
        <button onClick={authCreate} className="auth__btn">
          Create account
        </button>
      )}

      {authLogIn && (
        <button onClick={authLogIn} className="auth__btn">
          Log in
        </button>
      )}
    </div>
  );
}
