import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  showYoyrGame,
  deleteYoyrGame,
  showingYourInvitationsToGames,
  joinTheGame,
  declineInvitation,
} from "../../actions/Game";

export default function InformationForms() {
  const dispatch = useDispatch();
  const yourGames = useSelector((state) => state.games.yourGames);
  const invitationsToGames = useSelector(
    (state) => state.games.invitationsToGames
  );

  useEffect(() => {
    dispatch(showYoyrGame());
    dispatch(showingYourInvitationsToGames());
  }, []);

  return (
    <div className="main__row">
      <div className="main__games">
        <div className="main__title">
          <h2>Інформація по іграм</h2>
        </div>

        <div className="main__block block">
          <p className="block__text">Ігри які ви створили</p>
          <ul className="block__list">
            {yourGames.map((game) => {
              return (
                <li key={game.id} className="block__link">
                  <span>{game.name_game}</span>
                  <div>
                    <button onClick={() => dispatch(joinTheGame(game.id))}>
                      До гри
                    </button>
                    <button onClick={() => dispatch(deleteYoyrGame(game.id))}>
                      Видалити
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="main__block block">
          <p className="block__text">Ігри до яких вас запрошують</p>
          <ul className="block__list">
            {invitationsToGames.map((game) => {
              return (
                <li key={game.invitation_id} className="block__link">
                  <span>{game.game_name}</span>
                  <div>
                    <button
                      onClick={() =>
                        dispatch(joinTheGame(game.game_id, game.invitation_id))
                      }
                    >
                      До гри
                    </button>
                    <button
                      onClick={() =>
                        dispatch(declineInvitation(game.invitation_id))
                      }
                    >
                      Відмовитися
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
