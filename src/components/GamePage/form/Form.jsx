import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { giveAnAnswer, startAPoll, finishAPoll } from "../../../actions/Game";

export default function Form({ active }) {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.games.gameYouHaveJoined);
  const gameId = useSelector((state) => state.games.gameId);

  const stories = useSelector((state) => state.games.stories);
  const answers = useSelector((state) => state.games.answers);

  const [historyNumber, setHistoryNumber] = useState(0);
  const [valueCard, setValueCard] = useState(null);
  const [isEmpty, setEmpty] = useState(true);
  const fibonacci = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, "pass"];



  useEffect(() => {
    setEmpty(Object.keys(game.selected_story).length === 0);
  }, [game]);

  function addAnswer() {
    if (String(valueCard) !== "null" && game.selected_story.id) {
      dispatch(giveAnAnswer(game.selected_story.id, valueCard));
    }
  }

  const subtractHistoryNumber = () => {
    historyNumber > 0 && setHistoryNumber((value) => --value);
  };
  const addHistoryNumber = () => {
    historyNumber < stories.length - 1 && setHistoryNumber((value) => ++value);
  };

  function startPull() {
    dispatch(startAPoll(stories[historyNumber].id, gameId));
  }
  function finishPull() {
    finishAPoll(gameId);
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
        <div className="form__story">
          <div className="form__row">
            <div>
              {!isEmpty && (
                <h3 className="form__title">Опитування розпочалося</h3>
              )}
            </div>

            <nav className="form__navigation">
              <h3 className="form__title">{`Story ${historyNumber + 1}`}</h3>
              <button className="form__arrow" onClick={subtractHistoryNumber}>
                &#171;
              </button>
              <button onClick={startPull}>Start a poll</button>
              <button onClick={finishPull}>Finish a poll</button>
              <button className="form__arrow" onClick={addHistoryNumber}>
                &#187;
              </button>
            </nav>
          </div>

          <p className="form__text">
            {stories && stories[historyNumber] && stories[historyNumber].body}
          </p>
        </div>
      </div>

      <div className="form__row">
        <div className="form__users">
          {isEmpty
            ? answers[stories[historyNumber].id].map((answer) => {
                let user = game.players.find(
                  (player) => player.user_id === answer.user_id
                );
                return (
                  <div className="form__user" key={user.user_id}>
                    <h3 className="form__username">{user.user_name}</h3>
                    <div className="form__answer">
                      <span>Answer:</span>
                      {answer.body}
                    </div>
                  </div>
                );
              })
            : game.users_joined.map((user) => {
                let answer = game.id_players_responded.find(
                  (playerId) => playerId === user.user_id
                );
                return (
                  <div className="form__user" key={user.user_id}>
                    <h3 className="form__username">{user.user_name}</h3>
                    <div className="form__answer">
                      <span>Answer:</span> {answer ? "???" : "---"}
                    </div>
                  </div>
                );
              })}
        </div>
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
