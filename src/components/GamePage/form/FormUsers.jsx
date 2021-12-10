import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function FormUsers({ isEmpty }) {
  const { players, users_joined, id_players_responded } = useSelector(
    (state) => state.games.gameYouHaveJoined
  );
  const historyNumber = useSelector((state) => state.games.historyNumber);
  const stories = useSelector((state) => state.games.stories);
  const answers = useSelector((state) => state.games.answers);
  const [playersOnline, setPlayersOnline] = useState([]);

  let answer = stories.length && answers[stories[historyNumber].id];

  useEffect(() => {
    let arr = users_joined.reduce((newArr, user) => {
      for (let i = 0; i < players.length; i++) {
        if (players[i].user_id === user.user_id) {
          newArr.push(user);
          break;
        }
      }
      return newArr;
    }, []);

    setPlayersOnline(arr);
  }, [players, users_joined]);

  return (
    <div className="form__users">
      {isEmpty ? (
        answer.length ? (
          answer.map((value) => {
            let user = players.find(
              (player) => player.user_id === value.user_id
            );
            if (user) {
              return (
                <div className="form__user" key={user.user_id}>
                  <h3 className="form__username">{user.user_name}</h3>
                  <div className="form__answer">
                    <span>Answer:</span>
                    {value.body}
                  </div>
                </div>
              );
            }
          })
        ) : (
          <h3 className="form__title-error">There are no answers yet</h3>
        )
      ) : playersOnline.length ? (
        playersOnline.map((playr) => {
          let answer = id_players_responded.find(
            (playerId) => playerId === playr.user_id
          );
          return (
            <div className="form__user" key={playr.user_id}>
              <h3 className="form__username">{playr.user_name}</h3>
              <div className="form__answer">
                <span>Answer:</span> {answer ? "???" : "---"}
              </div>
            </div>
          );
        })
      ) : (
        <h3 className="form__title-error">
          The players didn't come into the game or you didn't invite anyone
        </h3>
      )}
    </div>
  );
}
