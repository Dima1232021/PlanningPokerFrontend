import React, { useState } from "react";
import Switch from "../../../switch/Switch";
import "./menuGame.scss";

export default function MenuGame() {
  const [isToggled, setToggled] = useState(true);
  return (
    <div className="menu-game">
      <p className="menu-game__title">Game settings</p>
      <div className="menu-game__row">
        <p className="menu-game__text">Take part in the game</p>
        <Switch value={isToggled} setValue={setToggled} />
      </div>
      <div className="menu-game__row">
        <p className="menu-game__text">
          Allow cards to be flipped automatically if all players respond to a
          story
        </p>
        <Switch value={isToggled} setValue={setToggled} />
      </div>
    </div>
  );
}
