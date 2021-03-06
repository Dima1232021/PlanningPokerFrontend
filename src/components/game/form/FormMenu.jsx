import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useActions, useAddErrors } from "../../../hooks";

export default function FormMenu() {
  const { addError } = useAddErrors();
  const { startPollAction, flipCardAction, resetCardsAction } = useActions();
  const { onlineUsers, game, stories, answers, gameId, historyNumber } = useSelector(
    (state) => state.game
  );
  const [checkAnswer, setCheckAnswer] = useState(false);
  const [checkPlayer, setCheckPlayer] = useState(false);

  useEffect(() => {
    setCheckPlayer(!!onlineUsers.find((user) => user.player));
  }, [onlineUsers]);

  useEffect(() => {
    setCheckAnswer(!!stories.length && !!answers[stories[historyNumber].id].length);
  }, [historyNumber, answers]);

  useEffect(() => {
    const story = stories[historyNumber];
    setCheckAnswer(!!story && !!answers[story.id].length);
  }, [historyNumber, answers]);

  function startPull() {
    if (checkPlayer) {
      return startPollAction({ storyId: stories[historyNumber].id, gameId }, addError);
    }
    return addError("No players found");
  }
  function flipCard() {
    flipCardAction({ gameId }, addError);
  }
  function resetCards() {
    if (checkPlayer) {
      return resetCardsAction({ storyId: stories[historyNumber].id, gameId }, addError);
    }
    return addError("No players found");
  }

  return (
    <div className="form-game__row">
      <div className="form-game__menu">
        <button
          className="form-game__btn btn"
          onClick={startPull}
          disabled={game.poll || checkAnswer || !stories.length}
        >
          Start Poll
        </button>

        <button className="form-game__btn btn" onClick={flipCard} disabled={!game.poll}>
          Flip Cards
        </button>

        <button
          className="form-game__btn btn"
          onClick={resetCards}
          disabled={game.poll || !checkAnswer}
        >
          Reset Cards
        </button>
      </div>
    </div>
  );
}
