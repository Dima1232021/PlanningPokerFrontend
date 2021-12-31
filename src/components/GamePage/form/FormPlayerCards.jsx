import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { giveAnAnswer } from "../../../actions/Game";

export default function FormPlayerCards() {
  const fibonacci = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, "pass"];
  const game = useSelector((state) => state.games.gameYouHaveJoined);
  const onlinePlayers = useSelector((state) => state.games.onlinePlayers);
  const userid = useSelector((state) => state.user.userid);
  const [valueCard, setValueCard] = useState(null);
  const [checkPlayer, setCheckPlayer] = useState(false);
  const [checkId, setCheckId] = useState(false);

  useEffect(() => {
    setCheckPlayer(!!onlinePlayers.find((value) => value.id === userid));
  }, [onlinePlayers]);

  useEffect(() => {
    setCheckId(!!game.id_players_answers.find((id) => id === userid));
  }, [game]);

  function addAnswer() {
    if (String(valueCard) !== "null" && game.poll && !checkId) {
      giveAnAnswer(game.history_poll.id, valueCard);
      setValueCard(null);
    }
  }

  return (
    <div className="form__player-cards">
      {game.poll && checkPlayer && !checkId && (
        <>
          <button
            className="form__btn-answer"
            onClick={addAnswer}
            disabled={checkId}
          >
            Дати відповідь
          </button>
          <ul className="form__list">
            {fibonacci.map((card, index) => (
              <li
                onClick={() => setValueCard(card)}
                key={card}
                className={`form__link ${valueCard === card && "active"}`}
              >
                {card}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
