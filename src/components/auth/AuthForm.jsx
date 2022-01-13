import React, { useEffect } from "react";
import { useActions, useAddErrors, useInput } from "../../hooks";
import Form from "./Form";

function AuthForm({ auth }) {
  const { loginAction, createAction } = useActions();
  const { addError } = useAddErrors();
  const username = useInput("", { min: 5, max: 16 }, "Username");
  const email = useInput("", { isEmail: true }, "Email");
  const pass = useInput("", { min: 6, max: 16 }, "Password");
  const passConf = useInput("", { passConf: pass.value }, "Password Confirmation");

  useEffect(() => {
    username.setValue("");
    email.setValue("");
    pass.setValue("");
    passConf.setValue("");
  }, [auth]);

  function authLogIn() {
    if (email.isValid && pass.isValid) {
      loginAction({ email: email.value, password: pass.value }, addError);
    } else {
      email.showErr();
      pass.showErr();
    }
  }

  function authCreate() {
    if (username.isValid && email.isValid && pass.isValid && passConf.isValid) {
      createAction(
        {
          username: username.value,
          email: email.value,
          password: pass.value,
          passwordConf: passConf.value,
        },
        addError
      );
    } else {
      username.showErr();
      email.showErr();
      pass.showErr();
      passConf.showErr();
    }
  }

  if (auth === "Log in") {
    return (
      <>
        <h2 className="auth__title">Log in</h2>
        <Form email={email} pass={pass} authLogIn={authLogIn} />
      </>
    );
  } else {
    return (
      <>
        <h2 className="auth__title">Authenticate</h2>
        <Form
          username={username}
          email={email}
          pass={pass}
          passConf={passConf}
          authCreate={authCreate}
        />
      </>
    );
  }
}
export default AuthForm;
