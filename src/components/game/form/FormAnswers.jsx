import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function FormAnswers() {
  const { game, stories, answers, historyNumber, onlineUsers } = useSelector((state) => state.game);

  const [answersToHistory, setAnswersToHistory] = useState([]);

  useEffect(() => {
    const story = stories[historyNumber];
    setAnswersToHistory(!!story && answers[story.id]);
  }, [historyNumber, answers]);

  return (
    <div className="form-game__row">
      <div className="form-game__answers">
        {!game.poll ? (
          answersToHistory.length ? (
            answersToHistory.map((value) => {
              return (
                <div className="form-game__user" key={value.id}>
                  <h3 className="form-game__username">{value.user_name}</h3>
                  <div className="form-game__answer">
                    <span>Answer:</span>
                    {value.body}
                  </div>
                </div>
              );
            })
          ) : (
            <h3 className="form-game__title">There are no answers yet</h3>
          )
        ) : (
          onlineUsers.map((playr) => {
            let answer = game.idPlayersResponded.find((playerId) => playerId === playr.id);
            return playr.player ? (
              <div className="form-game__user" key={playr.id}>
                <h3 className="form-game__username">{playr.username}</h3>
                <div className="form-game__answer">
                  <span>Answer:</span> {answer ? "???" : "---"}
                </div>
              </div>
            ) : null;
          })
        )}
      </div>
    </div>
  );
}
