import React from "react";

export default function FormStory() {
  function subtractHistoryNumber() {
    historyNumber > 0 && setHistoryNumber((value) => --value);
  }
  function addHistoryNumber() {
    historyNumber < stories.length - 1 && setHistoryNumber((value) => ++value);
  }

  function startPull() {
    dispatch(startAPoll(stories[historyNumber].id, gameId));
  }
  function finishPull() {
    finishAPoll(gameId);
  }
  return (
    <div className="form__story">
      <div className="form__row">
        <div>
          {!isEmpty && <h3 className="form__title">Опитування розпочалося</h3>}
        </div>

        <nav className="form__navigation">
          <h3 className="form__title">{`Story ${historyNumber + 1}`}</h3>
          <button className="form__arrow" onClick={subtractHistoryNumber}>
            &#171;
          </button>
          <button onClick={startPull}>Start a poll</button>
          <button onClick={finishPull}>Finish a poll</button>
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
