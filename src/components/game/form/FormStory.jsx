import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../../hooks";

export default function FormStory() {
  const { changeHistoryNumber } = useActions();
  const { historyNumber, stories, game } = useSelector((state) => state.game);

  function subtractHistoryNumber() {
    historyNumber > 0 && changeHistoryNumber({ historyNumber: historyNumber - 1 });
  }
  function addHistoryNumber() {
    historyNumber < stories.length - 1 && changeHistoryNumber({ historyNumber: historyNumber + 1 });
  }

  return (
    <div className="form-game__row">
      <div className="form-game__story">
        {!stories.length ? (
          <h3 className="form-game__title">You haven't created a story yet</h3>
        ) : (
          <>
            <div className="form-game__column">
              {!game.poll ? (
                <p className="form-game__text">{stories[historyNumber].body}</p>
              ) : (
                <>
                  <h3 className="form-game__title">The poll has begun</h3>
                  <p className="form-game__text">{game.historyPoll.body}</p>
                </>
              )}
            </div>

            {!game.poll && stories.length > 1 && (
              <div className="form-game__column">
                <button className="form-game__arrow" onClick={subtractHistoryNumber}>
                  &#9664;
                </button>

                <p className="form-game__info">{`Story ${historyNumber + 1}`}</p>

                <button className="form-game__arrow" onClick={addHistoryNumber}>
                  &#9654;
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
