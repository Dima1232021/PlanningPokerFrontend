import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { giveAnAnswer } from "../../../actions/Game";
import FormStory from "./FormStory";
import FormUsers from "./FormUsers";

export default function Form({ active }) {
  const fibonacci = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, "pass"];
  const dispatch = useDispatch();
  const game = useSelector((state) => state.games.gameYouHaveJoined);

  const [valueCard, setValueCard] = useState(null);
  const [isEmpty, setEmpty] = useState(true);

  useEffect(() => {
    setEmpty(Object.keys(game.selected_story).length === 0);
  }, [game]);

  function addAnswer() {
    if (String(valueCard) !== "null" && game.selected_story.id) {
      dispatch(giveAnAnswer(game.selected_story.id, valueCard));
    }
  }

  return (
    <div className={`game__form form ${active && "active"}`}>
      <div className="form__row">
        <div className="form__header ">
          <h2 className="form__name-game">{game.name_game}</h2>
          <p className="form__driving">
            <b>Driving:</b>
            {game.driving.user_name}
          </p>
        </div>
      </div>

      <div className="form__row">
        <FormStory isEmpty={isEmpty} />
      </div>

      <div className="form__row">
        <FormUsers isEmpty={isEmpty} />
      </div>

      <div className="form__row">
        <div className="form__player-cards">
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
        </div>
      </div>
    </div>
  );
}
