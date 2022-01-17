import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { AuthPage, CreateGame, GamePage, MainPage } from "../pages";
import { useHistory, matchPath } from "react-router";

const AppRouter = () => {
  const history = useHistory();
  const { isAuth } = useSelector((state) => state.auth);
  const { urlGame, joinTheGame } = useSelector((state) => state.game);
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

  useEffect(() => {
    joinTheGame && history.push(`/game/${urlGame}`);
  }, [joinTheGame]);

  return (
    <>
      {isAuth ? (
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/create_game" exact component={CreateGame} />
          <Route path="/game/:game" exact component={GamePage} />
        </Switch>
      ) : (
        <Switch>
          <Route path="/authenticet" exact component={AuthPage} />
        </Switch>
      )}
    </>
  );
};

export default AppRouter;
