import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { AuthPage, CreateGame, GamePage, MainPage } from "../pages";
import { useHistory, matchPath } from "react-router";
import NoMatch from "../pages/noMatch/NoMatch";
import { useActions, useAddErrors } from "../hooks";

const AppRouter = () => {
  const history = useHistory();
  const { joinTheGameAction, liveTheGameAction } = useActions();
  const { addError } = useAddErrors();

  const { isAuth } = useSelector((state) => state.auth);
  const { gameYouHaveJoined, isActivePage } = useSelector((state) => state.game);
  const [url, setUrl] = useState("/");

  useEffect(() => {
    const pathName = window.location.pathname;

    if (isAuth) {
      history.push(url);
    } else {
      history.push("/authenticet");
      !matchPath(pathName, "/authenticet") && setUrl(pathName);
    }
  }, [isAuth]);

  useEffect(() => {
    if (gameYouHaveJoined.joinTheGame) {
      if (gameYouHaveJoined.urlGame == url.substr(6, 30)) {
        return history.push(url);
      } else {
        if (
          window.confirm(`Перейти до гри "${gameYouHaveJoined.nameGame}" з якої ви не вийшли  ?`)
        ) {
          joinTheGameAction({ urlGame: gameYouHaveJoined.urlGame }, addError);
          return history.push(`game/${gameYouHaveJoined.urlGame}`);
        } else {
          liveTheGameAction(addError);
          return history.push(url);
        }
      }
    }

    isActivePage && joinTheGameAction({ urlGame: url.substr(6, 30) }, addError);
  }, [gameYouHaveJoined]);

  return (
    <>
      {isAuth ? (
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/create_game" exact component={CreateGame} />
          <Route path="/game/:game" exact component={GamePage} />
          <Route path="*" component={NoMatch} />
          <Redirect to="/" />
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
