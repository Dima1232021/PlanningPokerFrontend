import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import OutputErrors from "./OutputErrors";
import { useActions } from "../hooks/useActions";
import { useAddErrors } from "../hooks/useAddErrors";
import "./app.scss";


function App() {
  const { addError } = useAddErrors();
  const { loggedInAction } = useActions();
  const isAuth = useSelector((state) => state.auth.isAuth);

  useEffect(() => {
    loggedInAction(addError);
  }, []);

  // useEffect(() => {
  //   if (loggedIn) {
  //     dispatch(searchGameYouHaveJoined());
  //     dispatch(showUser());
  //   }
  // }, [loggedIn]);

  return (
    <div className="wrapper">
      {/* <ListActionCable /> */}
      <OutputErrors />

      <Header />
  
      <Footer />
    </div>
  );
}

export default App;
