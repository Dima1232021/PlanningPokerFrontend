import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import MainPage from "../pages/main/Main";
import AuthPage from "../pages/auth/Auth";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import CreateGame from "../pages/createGame/CreateGame";
import Game from "../pages/game/Game";
import { useHistory } from "react-router";
import { matchPath } from "react-router";

export const AppRouter = () => {
  const history = useHistory();
  const { isAuth, isLoading } = useSelector((state) => state.auth);
  const [url, setUrl] = useState("/");

  useEffect(() => {
    if (matchPath(window.location.pathname, "/game/:game")) {
      setUrl(window.location.pathname);
    }
  }, []);
  useEffect(() => {
    !isAuth && history.push("/authenticet");
    isAuth && history.push(url);
  }, [isAuth]);

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
          <Route path="/create_game" exact component={CreateGame} />
          <Route path="/game/:game" exact component={Game} />
        </Switch>
      ) : (
        <Switch>
          <Route path="/authenticet" exact component={AuthPage} />
        </Switch>
      )}
      <Footer />
    </>
  );
};
