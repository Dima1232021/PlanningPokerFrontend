import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { AuthPage, CreateGame, GamePage, MainPage } from "../pages";
import { useHistory, matchPath } from "react-router";
import NoMatch from "../store/reducers/noMatch/NoMatch";

const AppRouter = () => {
  const history = useHistory();

  const { isAuth } = useSelector((state) => state.auth);
  const { urlGame, joinTheGame } = useSelector((state) => state.game);
  const [url, setUrl] = useState("/");

  useEffect(() => {
    setUrl(window.location.pathname);
    !isAuth && history.push("/authenticet");
  }, []);

  useEffect(() => {
    isAuth && history.push(url);
  }, [isAuth]);

  // useEffect(() => console.log(history), [isAuth]);

  // useEffect(() => {
  //   !isAuth && history.push("/authenticet");
  //   isAuth && history.push(url);
  // }, [isAuth]);

  // useEffect(() => {
  //   joinTheGame && history.push(`/game/${urlGame}`);
  //   isAuth && !joinTheGame && history.push(`/`);
  // }, [joinTheGame]);

  return (
    <>
      {isAuth ? (
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/create_game" exact component={CreateGame} />
          <Route path="/game/:game" exact component={GamePage} />
          <Route path="*" component={NoMatch} />
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
