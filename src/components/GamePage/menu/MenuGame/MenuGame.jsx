import React, { useState } from "react";
import Switch from "../../../switch/Switch";
import { useDispatch, useSelector } from "react-redux";
import { changeHostSettings } from "../../../../actions/Game";
import "./menuGame.scss";

export default function MenuGame() {
  const invitedPlayers = useSelector((state) => state.games.invitedPlayers);
  const gameId = useSelector((state) => state.games.gameId);
  const userid = useSelector((state) => state.user.userid);

  const { player } = invitedPlayers.find((user) => user.id == userid);

  function changes() {
    console.log("gg");
    changeHostSettings(gameId);
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
