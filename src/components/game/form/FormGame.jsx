import React from "react";
import { useSelector } from "react-redux";

import "./formGame.scss";
export default function () {
  const { driving, nameGame } = useSelector((state) => state.game);
  return (
    <div className="form-game">
      <div className="form-game__row">
        <div className="form-game__header">
          <h2 className="form-game__title">{nameGame}</h2>
          <p className="form-game__name">
            <b>Driving:</b>
            {driving.user_name}
          </p>
        </div>
      </div>
      {/* 
      {game.driving.user_id === userid && (
        <div className="form__row">
          <FormMenu />
        </div>
      )}

      <div className="form__row">
        <FormStory />
      </div>

      <div className="form__row">
        <FormUsers />
      </div>

      <div className="form__row">
        <FormPlayerCards />
      </div> */}
    </div>
  );
}
