import React from "react";
import { useSelector } from "react-redux";
import { startAPoll, finishAPoll, resetAPoll } from "../../../../actions/Game";

import "./formMenu.scss";

export default function FormMenu() {
  const stories = useSelector((state) => state.games.stories);
  const historyNumber = useSelector((state) => state.games.historyNumber);
  const gameId = useSelector((state) => state.games.gameId);
  const players = useSelector((state) => state.games.players);

  function startPull() {
    console.log(players);
    // if() {

    // }
    //  startAPoll(stories[historyNumber].id, gameId);
  }

  function flipCards() {
    finishAPoll(gameId);
  }

  function resetCards() {
    resetAPoll(stories[historyNumber].id, gameId);
  }
  return (
    <div className="form-menu">
      <button onClick={startPull} className="form__btn-answer">
        Start Poll
      </button>
      <button className="form__btn-answer" onClick={flipCards}>
        Flip Cards
      </button>
      <button className="form__btn-answer" onClick={resetCards}>
        Reset Cards
      </button>
    </div>
  );
}
