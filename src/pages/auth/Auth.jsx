import React, { useEffect, useState } from "react";
import MenuBlock from "../../components/menuBlock/MenuBlock";
import AuthForm from "../../components/auth/AuthForm";
import Loader from "../../components/loader/Loader";
import { useSelector } from "react-redux";
import "./auth.scss";

const AuthPage = (props) => {
  const { isLoading } = useSelector((state) => state.auth);

  const [auth, setAuth] = useState("Log in");
  return (
    <div className="auth">
      <div className="auth__form relHid">
        <MenuBlock btn1="Log in" btn2="Sign up" value={auth} setValue={setAuth} />

        <AuthForm auth={auth} />

        {isLoading && (
          <div className="loader">
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
