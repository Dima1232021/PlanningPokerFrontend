import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import Main from "../pages/Main";
import Auth from "../pages/auth/Auth.jsx";
import Header from "./header/Header";
import Footer from "./footer/Footer";

export const AppRouter = () => {
  const { isAuth } = useSelector((state) => state.auth);

  return (
    <>
      <Header />
      {isAuth ? (
        <Switch>
          <Route path="/" exact component={Main} />
          <Redirect to="/" />
        </Switch>
      ) : (
        <Switch>
          <Route path="/authenticet" component={Auth} />
          <Redirect to="/authenticet" />
        </Switch>
      )}
      <Footer />
    </>
  );
};
