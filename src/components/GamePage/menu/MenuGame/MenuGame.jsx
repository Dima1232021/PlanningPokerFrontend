import React, { useState } from "react";
import Switch from "../../../switch/Switch";
import { useDispatch, useSelector } from "react-redux";
import { playerSettings } from "../../../../actions/Game";
import { useAddErrors } from "../../../../hooks/useAddErrors";
import "./menuGame.scss";

export default function MenuGame() {
  const { addError } = useAddErrors();
  const game = useSelector((state) => state.games.gameYouHaveJoined);
  const playersOnline = useSelector((state) => state.games.playersOnline);
  const gameId = useSelector((state) => state.games.gameId);
  const userid = useSelector((state) => state.user.userid);

  const { player } = playersOnline.find((user) => user.id == userid);

  function changePlayerSettings() {
    if (!game.poll) {
      return playerSettings(gameId);
    }

    return addError("Change is possible only when there is no survey");
  }

  function changeCardrolloverSettings() {
    console.log("asdf");
  }

  return (
    <div className="menu-game">
      <p className="menu-game__title">Game settings</p>
      <div className="menu-game__row">
        <p className="menu-game__text">Take part in the game</p>
        <Switch value={player} setValue={changePlayerSettings} />
      </div>
      <div className="menu-game__row">
        <p className="menu-game__text">Flip cards automatically</p>
        <Switch value={true} setValue={changeCardrolloverSettings} />
      </div>
    </div>
  );
}
