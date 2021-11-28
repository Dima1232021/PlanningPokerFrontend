import React, { useEffect, useState } from "react";
import { API_URL } from "../../config";
import { ActionCable } from "react-actioncable-provider";
import CreateGame from "./createGame/CreateGame";
import { useDispatch, useSelector } from "react-redux";
import {
  showYoyrGame,
  deleteYoyrGame,
  showingYourInvitationsToGames,
  joinTheGame,
  showTheGamesYouHaveJoined,
  declineInvitation,
} from "../../actions/Game";
import {
  addGameInvitationAction,
  deleteInvitationAction,
} from "../../reducers/gamesReducer";

import "./main.scss";

export default function MainPage() {
  const dispatch = useDispatch();
  const userid = useSelector((state) => state.user.userid);
  const yourGames = useSelector((state) => state.games.yourGames);
  const invitationsToGames = useSelector(
    (state) => state.games.invitationsToGames
  );
  const gamesYouHaveJoined = useSelector(
    (state) => state.games.gamesYouHaveJoined
  );

  const [active, seActive] = useState(true);

  useEffect(() => {
    dispatch(showYoyrGame());
    dispatch(showingYourInvitationsToGames());
    dispatch(showTheGamesYouHaveJoined());
  }, []);

  return (
    <div className="main">
      <ActionCable
        channel={{
          channel: "ShowingGameRequestsChannel",
          user: userid,
        }}
        onReceived={(value) => {
          dispatch(addGameInvitationAction(value));
        }}
      />
      <ActionCable
        channel={{
          channel: "DeleteInvitationChannel",
          user: userid,
        }}
        onReceived={(value) => {
          dispatch(
            deleteInvitationAction({
              invitationId: value.invitation_id,
              value: "are invited",
            })
          );
          console.log("DeleteInvitationChannel", value);
        }}
      />

      <div className="container">
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
                        <button>До гри</button>
                        <button
                          onClick={() => dispatch(deleteYoyrGame(game.id))}
                        >
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
                        <button onClick={() => dispatch(joinTheGame(game))}>
                          Приєднатися
                        </button>
                        <button
                          onClick={() =>
                            dispatch(
                              declineInvitation(
                                game.invitation_id,
                                "are invited"
                              )
                            )
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

            <div className="main__block block">
              <p className="block__text">Ігри до яких ви приєдналися</p>
              <ul className="block__list">
                {gamesYouHaveJoined.map((game) => {
                  return (
                    <li key={game.game_id} className="block__link">
                      <span>{game.game_name}</span>
                      <div>
                        <button>До гри</button>
                        <button
                          onClick={() =>
                            dispatch(
                              declineInvitation(game.invitation_id, "joined")
                            )
                          }
                        >
                          Видалити
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="main__row">
          {active ? (
            <button
              className="main__btn-create"
              onClick={() => seActive(!active)}
            >
              Створити нову гру
            </button>
          ) : (
            <CreateGame seActive={seActive} />
          )}
        </div>
      </div>
    </div>
  );
}
