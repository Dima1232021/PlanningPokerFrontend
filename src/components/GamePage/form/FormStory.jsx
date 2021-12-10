import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeHistoryNumberAction } from "../../../reducers/gamesReducer";
import { startAPoll, finishAPoll } from "../../../actions/Game";

export default function FormStory({ isEmpty }) {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.games.gameYouHaveJoined);
  const historyNumber = useSelector((state) => state.games.historyNumber);
  const stories = useSelector((state) => state.games.stories);
  const gameId = useSelector((state) => state.games.gameId);
  const userid = useSelector((state) => state.user.userid);

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
      {!stories.length ? (
        <h3 className="form__title-error">
          Here will be your stories when you add them
        </h3>
      ) : (
        <>
          <div className="form__column">
            {isEmpty ? (
              <p className="form__text">
                <span>{`Story ${historyNumber + 1}`}</span>
                {stories[historyNumber].body}
              </p>
            ) : (
              <>
                <h3 className="form__title">The poll has begun</h3>
                <p className="form__text">
                  <span>{`Story ${
                    stories.map((x) => x.id).indexOf(game.selected_story.id) + 1
                  }`}</span>
                  {game.selected_story.body}
                </p>
              </>
            )}
          </div>

          {(game.driving.user_id === userid || !!isEmpty) && (
            <div className="form__column">
              {stories.length > 1 && isEmpty && (
                <button className="form__arrow" onClick={subtractHistoryNumber}>
                  &#9650;
                </button>
              )}
              {game.driving.user_id === userid &&
                (isEmpty ? (
                  <button onClick={startPull} className="form__btn-poll">
                    Start poll
                  </button>
                ) : (
                  <button onClick={finishPull} className="form__btn-poll finish">
                    Finish poll
                  </button>
                ))}

              {stories.length > 1 && isEmpty && (
                <button className="form__arrow" onClick={addHistoryNumber}>
                  &#9660;
                </button>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
