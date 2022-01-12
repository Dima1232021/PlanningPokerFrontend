import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import MainPage from "../pages/main/Main";
import AuthPage from "../pages/auth/Auth";
import Header from "./header/Header";
import Footer from "./footer/Footer";

export const AppRouter = () => {
  const { isAuth, isLoading } = useSelector((state) => state.auth);

  return (
    <>
      <Header />
      {isLoading ? (
        <div className="loader">
          <div className="loader__row">Loading...</div>
        </div>
      ) : isAuth ? (
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Redirect to="/" />
        </Switch>
      ) : (
        <Switch>
          <Route path="/authenticet" component={AuthPage} />
          <Redirect to="/authenticet" />
        </Switch>
      )}
      <Footer />
    </>
  );
};
