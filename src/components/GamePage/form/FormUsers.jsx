import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function FormUsers() {

  const game = useSelector((state) => state.games.gameYouHaveJoined);
  const historyNumber = useSelector((state) => state.games.historyNumber);
  const stories = useSelector((state) => state.games.stories);
  const answers = useSelector((state) => state.games.answers);
  const playersOnline = useSelector((state) => state.games.playersOnline);

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    setPlayers(playersOnline.filter((player) => player.player === true));
  }, [playersOnline]);

  let answer = stories.length && answers[stories[historyNumber].id];

  return (
    <div className="form__users">
      {!game.poll ? (
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
      ) : players.length ? (
        players.map((playr) => {
          // let answer = game.id_players_responded.find(
          //   (playerId) => playerId === playr.user_id
          // );
          return (
            <div className="form__user" key={playr.id}>
              <h3 className="form__username">{playr.username}</h3>
              <div className="form__answer">
                {/* <span>Answer:</span> {answer ? "???" : "---"} */}
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
