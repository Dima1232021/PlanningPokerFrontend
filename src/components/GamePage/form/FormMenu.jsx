import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { startAPoll, finishAPoll, resetAPoll } from "../../../actions/Game";
import { useAddErrors } from "../../../hooks/useAddErrors";

import "./formMenu.scss";

export default function FormMenu() {
  const { addError } = useAddErrors();
  const game = useSelector((state) => state.games.gameYouHaveJoined);
  const stories = useSelector((state) => state.games.stories);
  const historyNumber = useSelector((state) => state.games.historyNumber);
  const gameId = useSelector((state) => state.games.gameId);
  const onlinePlayers = useSelector((state) => state.games.onlinePlayers);
  const answers = useSelector((state) => state.games.answers);
  const [checkAnswer, setCheckAnswer] = useState(false);

  useEffect(() => {
    setCheckAnswer(
      !!stories.length && !!answers[stories[historyNumber].id].length
    );
  }, [historyNumber, answers]);

  function startPull() {
    if (onlinePlayers.length && !game.poll && !checkAnswer && stories.length) {
      return startAPoll(stories[historyNumber].id, gameId);
    }
    return addError("No players found");
  }

  function flipCards() {
    if (game.poll) {
      finishAPoll(gameId);
    }
  }

  function resetCards() {
    if (!game.poll || checkAnswer) {
      resetAPoll(stories[historyNumber].id, gameId);
    }
  }
  return (
    <div className="form-menu">
      <button
        onClick={startPull}
        className={`form-menu__btn-answer ${
          (game.poll || checkAnswer || !stories.length) && "disabled"
        }`}
        disabled={game.poll || checkAnswer || !stories.length}
      >
        Start Poll
      </button>

      <button
        className={`form-menu__btn-answer ${!game.poll && "disabled"}`}
        onClick={flipCards}
        disabled={!game.poll}
      >
        Flip Cards
      </button>

      <button
        className={`form-menu__btn-answer ${
          (game.poll || !checkAnswer) && "disabled"
        }`}
        onClick={resetCards}
        disabled={game.poll || !checkAnswer}
      >
        Reset Cards
      </button>
    </div>
  );
}
