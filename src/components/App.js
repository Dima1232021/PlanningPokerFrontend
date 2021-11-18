import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import MainPage from "./MainPage/MainPage";
import AuthenticatePage from "./AuthenticatePage/AuthenticatePage";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import "./app.scss";

function App() {
  return (
    <div className="wrapper">
      <Header />
      {false ? (
        <Switch>
          <Route path="/main" component={MainPage} />
          <Redirect to="/main" />
        </Switch>
      ) : (
        <Switch>
          <Route path="/authenticet" component={AuthenticatePage} />
          <Redirect to="/authenticet" />
        </Switch>
      )}
      <Footer />
    </div>
  );
}

export default App;
