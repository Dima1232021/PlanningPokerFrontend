import React, { useEffect } from "react";

import { useInput } from "../../../hooks/useInput";
import { useAddErrors } from "../../../hooks/useAddErrors";
import Form from "./Form";
import { useActions } from "../../../hooks/useActions";

export default function AuthForm({ auth }) {
  const { loginAction, createAction } = useActions();
  const { addError } = useAddErrors();

  const username = useInput("", { minLength: 5, maxLength: 16 }, "Username");
  const email = useInput("", { isEmail: true }, "Email");
  const password = useInput(
    "",
    {
      minLength: 6,
      maxLength: 16,
    },
    "Password"
  );
  const passwordConf = useInput(
    "",
    {
      passwordConfirmation: password.value,
    },
    "Password Confirmation"
  );

  useEffect(() => {
    username.setValue("");
    email.setValue("");
    password.setValue("");
    passwordConf.setValue("");
  }, [auth]);

  function authLogIn() {
    if (email.isValid && password.isValid) {
      loginAction({ email: email.value, password: password.value }, addError);
    } else {
      email.outputError();
      password.outputError();
    }
  }

  function authCreate() {
    if (
      username.isValid &&
      email.isValid &&
      password.isValid &&
      passwordConf.isValid
    ) {
      createAction(
        {
          username: username.value,
          email: email.value,
          password: password.value,
          passwordConf: passwordConf.value,
        },
        addError
      );
    } else {
      username.outputError();
      email.outputError();
      password.outputError();
      passwordConf.outputError();
    }
  }

  if (auth === "Log in") {
    return (
      <>
        <h2 className="auth__title">Log in</h2>
        <Form email={email} password={password} authLogIn={authLogIn} />
      </>
    );
  } else {
    return (
      <>
        <h2 className="auth__title">Authenticate</h2>
        <Form
          username={username}
          email={email}
          password={password}
          pasConf={passwordConf}
          authCreate={authCreate}
        />
      </>
    );
  }
}
