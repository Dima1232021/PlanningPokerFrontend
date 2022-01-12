import React from "react";

const Form = ({ username, email, pass, passConf, authCreate, authLogIn }) => {
  return (
    <div className="auth__block">
      {username && (
        <input
          type="text"
          placeholder="Username"
          className="auth__input"
          value={username.value}
          onChange={(e) => username.onChange(e)}
          onBlur={username.showErr}
        />
      )}

      <input
        type="email"
        placeholder="Email"
        className="auth__input"
        value={email.value}
        onChange={(e) => email.onChange(e)}
        onBlur={email.showErr}
      />

      <input
        type="password"
        placeholder="Password"
        className="auth__input"
        value={pass.value}
        onChange={(e) => pass.onChange(e)}
        onBlur={pass.showErr}
      />

      {passConf && (
        <input
          type="password"
          placeholder="Password Confirmation"
          className="auth__input"
          value={passConf.value}
          onChange={(e) => passConf.onChange(e)}
          onBlur={passConf.showErr}
        />
      )}
      {authCreate ? (
        <button onClick={authCreate} className="auth__btn">
          Create account
        </button>
      ) : (
        <button onClick={authLogIn} className="auth__btn">
          Log in
        </button>
      )}
    </div>
  );
};

export default Form;
