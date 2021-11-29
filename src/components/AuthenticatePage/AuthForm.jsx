import React, { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { login, create } from "../../actions/authenticate";
import { useInput } from "../../hooks/useInput";

export default function AuthForm({ auth }) {
  const dispatch = useDispatch();

  // const username = useInput("", { isEmpty: true, minLength: 4, maxLength: 16 });
  const email = useInput("", { isEmpty: true, isEmail: true });
  const password = useInput("", { isEmpty: true, minLength: 6, maxLength: 16 });
  // const passwordConfirmation = useInput("", {
  //   isEmpty: true,
  //   passwordConfirmation: password.value,
  // });

  function authLogIn() {
    if (email.inputValid && password.inputValid) {
      // dispatch(login(email.value, password.value));
      console.log("Проблеми немає");
    } else {
      email.onBlur();
      password.onBlur();
      console.log("Єпроблема тому має вивести помилку");
      console.log("emailError", email.messageError);
      console.log("passwordError", password.messageError);
    }
  }

  function authCreate() {
    // if (
    //   username.inputValid &&
    //   email.inputValid &&
    //   password.inputValid &&
    //   passwordConfirmation.inputValid
    // ) {
    //   dispatch(
    //     create(
    //       username.value,
    //       email.value,
    //       password.value,
    //       passwordConfirmation.value
    //     )
    //   );
    // } else {
    //   username.onBlur();
    //   email.onBlur();
    //   password.onBlur();
    //   passwordConfirmation.onBlur();
    //   console.log("Єпроблема тому має вивести помилку");
    //   console.log("usernameError", username.messageError);
    //   console.log("emailError", email.messageError);
    //   console.log("passwordError", password.messageError);
    //   console.log(
    //     "passwordConfirmationError",
    //     passwordConfirmation.messageError
    //   );
    // }
  }

  console.log("Перезавантаження");

  if (auth === "logIn") {
    return (
      <>
        <h2 className="auth__title">Log in</h2>
        <div className="auth__block">
          <input
            type="email"
            placeholder="Email"
            className="auth__input"
            value={email.value}
            onChange={(e) => email.onChange(e)}
            onBlur={email.onBlur}
          />

          <input
            type="password"
            placeholder="Password"
            className="auth__input"
            value={password.value}
            onChange={(e) => password.onChange(e)}
            onBlur={password.onBlur}
          />
          <button onClick={authLogIn} className="auth__btn">
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
        {/* <input
          type="text"
          placeholder="Username"
          className="auth__input"
          value={username.value}
          onChange={(e) => username.onChange(e)}
          onBlur={username.onBlur}
        />
        <input
          type="email"
          placeholder="Email"
          className="auth__input"
          value={email.value}
          onChange={(e) => email.onChange(e)}
          onBlur={email.onBlur}
        />
        <input
          type="password"
          placeholder="Password"
          className="auth__input"
          value={password.value}
          onChange={(e) => password.onChange(e)}
          onBlur={password.onBlur}
        />
        <input
          type="password"
          placeholder="Password Confirmation"
          className="auth__input"
          value={passwordConfirmation.value}
          onChange={(e) => passwordConfirmation.onChange(e)}
          onBlur={passwordConfirmation.onBlur}
        /> */}
        <button onClick={authCreate} className="auth__btn">
          Create account
        </button>
      </div>
    </>
  );
}
