import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "./header/Header";
import Footer from "./footer/Footer";
import OutputErrors from "./OutputErrors";
import { logged_in } from "../actions/authenticate";
import { searchGameYouHaveJoined } from "../actions/Game";

import "./app.scss";
import Routes from "../routes";

function App() {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.user.logged_in);

  useEffect(() => {
    dispatch(logged_in());
  }, []);
  
  useEffect(() => {
    loggedIn && dispatch(searchGameYouHaveJoined());
  }, [loggedIn]);

  return (
    <div className="wrapper">
      <OutputErrors />
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
