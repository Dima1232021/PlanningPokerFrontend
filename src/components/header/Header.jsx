import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../../actions/authenticate";

import "./header.scss";

export default function Header() {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.user.logged_in);
  const username = useSelector((state) => state.user.username);

  function authLogoUt() {
    dispatch(logout());
  }

  return (
    <div className="header">
      <div className="container">
        <div className="header__row">
          <h1 className="header__title">Planning Poker</h1>
          {loggedIn && (
            <div className="header__block">
              <h3 className="header__username">{username}</h3>
              <button onClick={authLogoUt} className="header__btn-log">
                Logo ut
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
