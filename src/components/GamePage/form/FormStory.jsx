import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeHistoryNumberAction } from "../../../reducers/gamesReducer";

export default function FormStory() {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.games.gameYouHaveJoined);
  const historyNumber = useSelector((state) => state.games.historyNumber);
  const stories = useSelector((state) => state.games.stories);

  function subtractHistoryNumber() {
    historyNumber > 0 && dispatch(changeHistoryNumberAction(historyNumber - 1));
  }
  function addHistoryNumber() {
    historyNumber < stories.length - 1 &&
      dispatch(changeHistoryNumberAction(historyNumber + 1));
  }

  return (
    <div className="form__story">
      {!stories.length ? (
        <h3 className="form__title-error">
          Here will be your stories when you add them
        </h3>
      ) : (
        <>
          <div className="form__column">
            {!game.poll ? (
              <p className="form__text">{stories[historyNumber].body}</p>
            ) : (
              <>
                <h3 className="form__title">The poll has begun</h3>
                <p className="form__text">{game.history_poll.body}</p>
              </>
            )}
          </div>

          <div className="form__column">
            {stories.length > 1 && !game.poll && (
              <button className="form__arrow" onClick={subtractHistoryNumber}>
                &#9664;
              </button>
            )}

            {!game.poll ? (
              <p className="form__info">{`Story ${historyNumber + 1}`}</p>
            ) : (
              <p className="form__info">{`Story ${
                stories.map((x) => x.id).indexOf(game.history_poll.id) + 1
              }`}</p>
            )}

            {stories.length > 1 && !game.poll && (
              <button className="form__arrow" onClick={addHistoryNumber}>
                &#9654;
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
