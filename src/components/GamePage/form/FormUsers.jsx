import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function FormUsers() {
  const game = useSelector((state) => state.games.gameYouHaveJoined);
  const historyNumber = useSelector((state) => state.games.historyNumber);
  const stories = useSelector((state) => state.games.stories);
  const answers = useSelector((state) => state.games.answers);
  const onlinePlayers = useSelector((state) => state.games.onlinePlayers);
  const [answersToHistory, setAnswersToHistory] = useState([]);

  useEffect(() => {
    setAnswersToHistory(stories.length && answers[stories[historyNumber].id]);
  }, [historyNumber, answers]);

  return (
    <div className="form__users">
      {!game.poll ? (
        answersToHistory.length ? (
          answersToHistory.map((value) => {
            return (
              <div className="form__user" key={value.id}>
                <h3 className="form__username">{value.user_name}</h3>
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
        onlinePlayers.map((playr) => {
          let answer = game.id_players_answers.find(
            (playerId) => playerId === playr.id
          );
          return (
            <div className="form__user" key={playr.id}>
              <h3 className="form__username">{playr.username}</h3>
              <div className="form__answer">
                <span>Answer:</span> {answer ? "???" : "---"}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
