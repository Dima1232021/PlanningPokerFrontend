import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "./Form";
import Menu from "./Menu";

import "./game.scss";

export default function GamePage() {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.games.gameYouHaveJoined);

  const [active, setActive] = useState(false);

  return (
    <>
      <div className="game">
        <div className="game__column">
          <div className={`game__header ${active && "active"}`}>
            <h2 className="game__title">{game.name_game}</h2>
            <p className="game__text">
              <b>Driving:</b>
              {game.driving.user_name}
            </p>
          </div>
          <Form active={active} />
        </div>

        <div className={`game__column ${!active && "none"}`}>
          <Menu active={active} setActive={setActive} />
        </div>
      </div>
    </>
  );
}
