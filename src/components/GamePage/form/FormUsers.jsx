import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function FormUsers({ isEmpty }) {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.games.gameYouHaveJoined);
  const historyNumber = useSelector((state) => state.games.historyNumber);
  const stories = useSelector((state) => state.games.stories);
  const answers = useSelector((state) => state.games.answers);

  return (
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
  );
}
