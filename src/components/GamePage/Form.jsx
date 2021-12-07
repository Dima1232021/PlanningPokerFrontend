import React, { useEffect, useState } from "react";
import { ActionCable, ActionCableConsumer } from "react-actioncable-provider";
import { useDispatch, useSelector } from "react-redux";
import { changeGameYouHaveJoinedAction } from "../../reducers/gamesReducer";

export default function Form({ active }) {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.games.gameYouHaveJoined);

  var fibonacci = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, "pass"];
  return (
    <div className={`game__form form ${active && "active"}`}>
      <div className="form__row">
        <div className="form__story">
          <h2 className="form__title">Дайте оцінку історії</h2>
          <p>{game.selected_story.body}</p>
        </div>
      </div>

      <div className="form__row">
        <div className="form__users">
          {game.players.map((user) => {
            return (
              <div className="form__user" key={user.user_id}>
                <h3 className="form__username">{user.user_name}</h3>
                <div className="form__answer">
                  <span>Answer:</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="form__row">
        <div className="form__player-cards">
          <button className="form__btn-answer">Дати відповідь</button>

          <ul className="form__list">
            {fibonacci.map((card, index) => (
              <li key={card} className={`form__link card-${index}`}>
                {card}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
