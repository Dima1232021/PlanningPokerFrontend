import React, { useState } from "react";
import Switch from "../../../switch/Switch";
import { useDispatch, useSelector } from "react-redux";
import "./menuGame.scss";

export default function MenuGame() {
  const player = useSelector(
    (state) => state.games.gameYouHaveJoined.driving.player
  );

  function changes() {
    console.log("gg");
  }

  return (
    <div className="menu-game">
      <p className="menu-game__title">Game settings</p>
      <div className="menu-game__row">
        <p className="menu-game__text">Take part in the game</p>
        <Switch value={player} setValue={changes} />
      </div>
      {/* <div className="menu-game__row">
        <p className="menu-game__text">
          Allow cards to be flipped automatically if all players respond to a
          story
        </p>
        <Switch value={isToggled} setValue={setToggled} />
      </div> */}
    </div>
  );
}
