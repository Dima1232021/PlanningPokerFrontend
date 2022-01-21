import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useActions, useAddErrors } from "../../../hooks";

export default function FormCards() {
  const { addError } = useAddErrors();
  const { giveAnAnswerAction } = useActions();
  const { game, gameId, onlineUsers, fibonacci } = useSelector((state) => state.game);
  const { userId } = useSelector((state) => state.auth);
  const [answer, setAnswer] = useState(null);
  const [checkPlayer, setCheckPlayer] = useState(false);
  const [checkId, setCheckId] = useState(false);

  useEffect(() => {
    setCheckPlayer(!!onlineUsers.find((user) => user.id === userId && user.player));
  }, [onlineUsers]);

  useEffect(() => {
    setCheckId(!!game.idPlayersResponded.find((id) => id === userId));
  }, [game]);

  function addAnswer() {
    if (String(answer) !== "null" && game.poll && !checkId) {
      giveAnAnswerAction({ answer, gameId }, addError);
      setAnswer(null);
    }
  }

  return (
    <div className="form-game__row">
      <div className="form-game__cards">
        {game.poll && checkPlayer && !checkId && (
          <>
            <button className="form-game__btn btn" onClick={addAnswer} disabled={checkId}>
              Give an answer
            </button>
            <ul className="form-game__list">
              {fibonacci.map((card, index) => (
                <li
                  onClick={() => setAnswer(card)}
                  key={card}
                  className={`form-game__link ${answer === card && "active"}`}
                >
                  {card}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
