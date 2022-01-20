import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useActions, useAddErrors } from "../../../hooks";

export default function FormMenu() {
  const { addError } = useAddErrors();
  const { startPollAction, flipCardAction, resetCardsAction } = useActions();
  const { onlinePlayers, game, stories, answers, gameId, historyNumber } = useSelector(
    (state) => state.game
  );
  const [checkAnswer, setCheckAnswer] = useState(false);

  useEffect(() => {
    setCheckAnswer(!!stories.length && !!answers[stories[historyNumber].id].length);
  }, [historyNumber, answers]);

  function startPull() {
    if (onlinePlayers.length) {
      return startPollAction({ storyId: stories[historyNumber].id, gameId }, addError);
    }
    return addError("No players found");
  }
  function flipCard() {
    flipCardAction({ gameId }, addError);
  }
  function resetCards() {
    resetCardsAction({ storyId: stories[historyNumber].id, gameId }, addError);
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
