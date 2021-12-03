import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { leaveTheGame } from "../../actions/Game";
import Menu from "./Menu";

import "./game.scss";

export default function GamePage() {
  const game = useSelector((state) => state.games.gameYouHaveJoined);

  console.log(game);

  return (
    <div className="game">
      <div className="game__column">
        <div className="game__header">
          <h2 className="game__title">{game.name_game}</h2>
          <p>
            <span>Ведучий гри: {game.driving.user_name}</span>
          </p>
        </div>
        <div className="game__form form"></div>
      </div>

      <div className="game__column">
        <Menu />
      </div>
    </div>
  );
}
