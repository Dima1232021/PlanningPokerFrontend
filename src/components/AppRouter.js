import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import Main from "../pages/Main";
import Authenticate from "../pages/Authenticate";

export const AppRouter = () => {
  const { isAuth } = useSelector((state) => state.auth);

  return isAuth ? (
    <Switch>
      <Route path="/" exact component={Main} />
      <Redirect to="/" />
    </Switch>
  ) : (
    <Switch>
      <Route path="/authenticet" component={Authenticate} />
      <Redirect to="/authenticet" />
    </Switch>
  );
};
