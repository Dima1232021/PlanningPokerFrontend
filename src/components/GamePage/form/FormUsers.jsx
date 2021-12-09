import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function FormUsers({ isEmpty }) {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.games.gameYouHaveJoined);
  const historyNumber = useSelector((state) => state.games.historyNumber);
  const stories = useSelector((state) => state.games.stories);
  const answers = useSelector((state) => state.games.answers);

  let answer = stories.length && answers[stories[historyNumber].id];

  return (
    <div className="form__users">
      {isEmpty ? (
        answer.length ? (
          answer.map((value) => {
            let user = game.players.find(
              (player) => player.user_id === value.user_id
            );
            return (
              <div className="form__user" key={user.user_id}>
                <h3 className="form__username">{user.user_name}</h3>
                <div className="form__answer">
                  <span>Answer:</span>
                  {value.body}
                </div>
              </div>
            );
          })
        ) : (
          <h3 className="form__title-error">There are no answers yet</h3>
        )
      ) : (
        game.users_joined.map((user) => {
          let takesPart = game.players.find(
            (player) => player.user_id === user.user_id
          );
          if (takesPart) {
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
          }
          return (
            <h3 className="form__title-error">
              The players didn't come into the game or you didn't invite anyone
            </h3>
          );
        })
      )}
    </div>
  );
}
