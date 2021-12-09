import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeHistoryNumberAction } from "../../../reducers/gamesReducer";
import { startAPoll, finishAPoll } from "../../../actions/Game";

export default function FormStory({ isEmpty }) {
  const dispatch = useDispatch();
  const historyNumber = useSelector((state) => state.games.historyNumber);
  const stories = useSelector((state) => state.games.stories);
  const gameId = useSelector((state) => state.games.gameId);
  console.log(stories);

  function subtractHistoryNumber() {
    historyNumber > 0 && dispatch(changeHistoryNumberAction(historyNumber - 1));
  }
  function addHistoryNumber() {
    historyNumber < stories.length - 1 &&
      dispatch(changeHistoryNumberAction(historyNumber + 1));
  }

  function startPull() {
    startAPoll(stories[historyNumber].id, gameId);
  }
  function finishPull() {
    finishAPoll(gameId);
  }
  return (
    <div className="form__story">
      <div className="form__row">
      {/* {!stories? <h3 className="form__title">Т</h3>} */}
        <div>
          {!isEmpty && <h3 className="form__title">Опитування розпочалося</h3>}
        </div>

        <nav className="form__navigation">
          <h3 className="form__title">{`Story ${historyNumber + 1}`}</h3>
          <button className="form__arrow" onClick={subtractHistoryNumber}>
            &#171;
          </button>
          {isEmpty ? (
            <button onClick={startPull}>Start a poll</button>
          ) : (
            <button onClick={finishPull}>Finish a poll</button>
          )}
          <button className="form__arrow" onClick={addHistoryNumber}>
            &#187;
          </button>
        </nav>
      </div>

      <p className="form__text">
        {stories && stories[historyNumber] && stories[historyNumber].body}
      </p>
    </div>
  );
}
