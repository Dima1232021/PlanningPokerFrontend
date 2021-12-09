import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { giveAnAnswer } from "../../../actions/Game";

export default function FormPlayerCards({ isEmpty }) {
  const fibonacci = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, "pass"];
  const game = useSelector((state) => state.games.gameYouHaveJoined);
  const userid = useSelector((state) => state.user.userid);
  const [valueCard, setValueCard] = useState(null);
  const [checkPlayer, setCheckPlayer] = useState(false);

  useEffect(() => {
    let takesPart = game.players.find((player) => player.user_id === userid);
    setCheckPlayer(!!takesPart);
  }, [userid, game.players]);

  function addAnswer() {
    if (String(valueCard) !== "null" && game.selected_story.id) {
      giveAnAnswer(game.selected_story.id, valueCard);
    }
  }
  return (
    <div className="form__player-cards">
      {!isEmpty && checkPlayer && (
        <>
          <button className="form__btn-answer" onClick={addAnswer}>
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
