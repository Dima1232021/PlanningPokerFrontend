import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import MainPage from "./components/MainPage/MainPage";
import AuthenticatePage from "./components/AuthenticatePage/AuthenticatePage";
import GamePage from "./components/GamePage/GamePage.jsx";

export default function Routes() {
  const loggedIn = useSelector((state) => state.user.logged_in);
  const inTheGame = useSelector((state) => state.games.inTheGame);
  if (loggedIn && inTheGame) {
    return (
      <Switch>
        <Route path="/game" component={GamePage} />
        <Redirect to="/game" />
      </Switch>
    );
  } else if (loggedIn) {
    return (
      <Switch>
        <Route path="/main" component={MainPage} />
        <Redirect to="/main" />
      </Switch>
    );
  } else {
    return (
      <Switch>
        <Route path="/authenticet" component={AuthenticatePage} />
        <Redirect to="/authenticet" />
      </Switch>
    );
  }
}
