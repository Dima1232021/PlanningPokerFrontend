import React, { useEffect, useState } from "react";
import MenuBlock from "../../components/menuBlock/MenuBlock";
import AuthForm from "../../components/auth/AuthForm";

import "./auth.scss";
import { useHistory } from "react-router";

const AuthPage = (props) => {
  const history = useHistory();
  const [auth, setAuth] = useState("Log in");
  // let url = props.location.search.split("=")[1];
  return (
    <div className="auth">
      <div className="auth__form">
        <MenuBlock btn1="Log in" btn2="Sign up" value={auth} setValue={setAuth} />

        <AuthForm auth={auth} />
      </div>
    </div>
  );
};

export default AuthPage;
