import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "./Form";
import Menu from "./Menu";

import "./game.scss";

export default function GamePage() {
  const game = useSelector((state) => state.games.gameYouHaveJoined);

  const [active, setActive] = useState(true);

  console.log("GamePage", game);

  return (
    <div className="game">
      <div className="game__column">
        <div className={`game__header ${active && "active"}`}>
          <h2 className="game__title">{game.name_game}</h2>
          <p className="game__text">
            <b>Ведучий гри:</b>
            {game.driving.user_name}
          </p>
        </div>
        <Form active={active} />
      </div>

      <div className={`game__column ${!active && "none"}`}>
        <Menu active={active} setActive={setActive} />
      </div>
    </div>
  );
}
