import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startAPoll, finishAPoll } from "../../../../actions/Game";

import "./formMenu.scss";

export default function FormMenu() {
  const stories = useSelector((state) => state.games.stories);
  const historyNumber = useSelector((state) => state.games.historyNumber);
  const gameId = useSelector((state) => state.games.gameId);

  function startPull() {
    startAPoll(stories[historyNumber].id, gameId);
  }

  function flipCards() {
    finishAPoll(gameId);
  }
  return (
    <div className="form__menu">
      <button onClick={startPull} className="form__btn-answer">
        Start Poll
      </button>
      <button className="form__btn-answer" onClick={flipCards}>
        Flip Cards
      </button>
      <button className="form__btn-answer">Reset Cards</button>
    </div>
  );
}
