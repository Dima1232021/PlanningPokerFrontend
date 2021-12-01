import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { leaveTheGame } from "../../actions/Game";

import "./game.scss";

export default function GamePage() {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.games.gameYouHaveJoined);

  function leave() {
    dispatch(leaveTheGame(game));
  }

  return (
    <div className="game">
      <h1>Game page</h1>
      <button onClick={leave}>Вийти з гри</button>
    </div>
  );
}
