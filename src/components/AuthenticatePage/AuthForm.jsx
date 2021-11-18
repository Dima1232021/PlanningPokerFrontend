import React from "react";

export default function AuthForm({ auth }) {
  if (auth === "logIn") {
    return <h1>Login</h1>;
  }

  return <h1>Authenticet</h1>;
}
