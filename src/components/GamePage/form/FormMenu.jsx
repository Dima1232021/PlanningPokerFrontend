import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startAPoll, finishAPoll } from "../../../actions/Game";

export default function FormMenu() {
  const stories = useSelector((state) => state.games.stories);
  const historyNumber = useSelector((state) => state.games.historyNumber);
  const gameId = useSelector((state) => state.games.gameId);

  function startPull() {
    startAPoll(stories[historyNumber].id, gameId);
  }

  function finishPull() {
    finishAPoll(gameId);
  }
  return (
    <div className="form__menu">
      <button onClick={startPull} className="form__btn-answer">
        Start Poll
      </button>
      <button onClick={finishPull} className="form__btn-answer">
        Finish Poll
      </button>
      <button className="form__btn-answer">Flip Cards</button>
      <button className="form__btn-answer">Reset Cards</button>
    </div>
  );
}
