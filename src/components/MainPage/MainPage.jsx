import React, { useEffect, useState } from "react";
import { API_URL } from "../../config";
import { ActionCable } from "react-actioncable-provider";
import CreateGame from "./createGame/CreateGame";
import { useDispatch, useSelector } from "react-redux";
import { showYoyrGame, deleteYoyrGame } from "../../actions/Game";

import "./main.scss";

export default function MainPage() {
  const dispatch = useDispatch();
  const userid = useSelector((state) => state.user.userid);
  const yourGames = useSelector((state) => state.games.yourGames);

  const [active, seActive] = useState(true);

  const [invitedGames, setInvitedGames] = useState([]);
  const [gamesYouHaveJoined, setGamesYouHaveJoined] = useState([]);

  useEffect(() => {
    dispatch(showYoyrGame());
  }, []);

  function deleteGame(game_id) {
    dispatch(deleteYoyrGame(game_id));
  }

  useEffect(() => {
    fetch(`${API_URL}/game/invited_games`, {
      credentials: "include",
    }).then((value) =>
      value.json().then((data) => {
        // setInvitedGames(data);
        console.log("invited_games", data);
      })
    );
  }, []);

  useEffect(() => {
    fetch(`${API_URL}/game/games_you_have_joined`, {
      credentials: "include",
    }).then((value) =>
      value.json().then((data) => {
        // setGamesYouHaveJoined(data);
        console.log("games_you_have_joined", data);
      })
    );
  }, []);

  // function deleteGame(game_id) {
  //   fetch(`${API_URL}/game/delete_game`, {
  //     credentials: "include",
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ game_id }),
  //   }).then((value) =>
  //     value.json().then((data) => {
  //       if (data.delete_game) {
  //         let arr = yourGames.filter((value) => value.id !== game_id);
  //         setYourGames(arr);
  //       }
  //     })
  //   );
  // }

  function deleteInvited(invitation_id) {
    fetch(`${API_URL}/game/delete_invited`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ invitation_id }),
    }).then((value) =>
      value.json().then((data) => {
        // console.log(data)
        if (data.delete_invited) {
          let arr1 = invitedGames.filter(
            (value) => value.invitation_id !== invitation_id
          );
          let arr2 = gamesYouHaveJoined.filter(
            (value) => value.invitation_id !== invitation_id
          );
          setInvitedGames(arr1);
          setGamesYouHaveJoined(arr2);
        }
      })
    );
  }

  function joinTheGame({ invitation_id, game_id, game_name }) {
    fetch(`${API_URL}/game/join_the_game`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ invitation_id, game_id }),
    }).then((value) =>
      value.json().then((data) => {
        let arr1 = invitedGames.filter(
          (value) => value.invitation_id !== invitation_id
        );
        setInvitedGames(arr1);

        setGamesYouHaveJoined([
          ...gamesYouHaveJoined,
          { invitation_id, game_id, game_name },
        ]);
        // console.log(data);
      })
    );
  }

  return (
    <div className="main">
      <ActionCable
        key={userid}
        channel={{
          channel: "ShowingGameRequestsChannel",
          user: userid,
        }}
        onReceived={(value) => {
          console.log("ShowingGameRequestsChannel:", value);
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
                        <button onClick={() => deleteGame(game.id)}>
                          Видалити
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* <div className="main__block block">
              <p className="block__text">Ігри до яких вас запрошують</p>
              <ul className="block__list">
                {invitedGames.map((game) => {
                  return (
                    <li key={game.invitation_id} className="block__link">
                      {game.game_name}
                      <button onClick={() => joinTheGame(game)}>
                        Приєднатися
                      </button>
                      <button onClick={() => deleteInvited(game.invitation_id)}>
                        Відмовитися
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div> */}

            <div className="main__block block">
              <p className="block__text">Ігри до яких вас запрошують</p>
              <ul className="block__list">
                {invitedGames.map((game) => {
                  return (
                    <li key={game.invitation_id} className="block__link">
                      <span>{game.game_name}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* <div className="main__block block">
              <p className="block__text">Ігри до яких ви приєдналися</p>

              <ul className="block__list">
                {gamesYouHaveJoined.map((game) => {
                  return (
                    <li key={game.game_id} className="block__link">
                      {game.game_name}
                      <button onClick={() => deleteInvited(game.invitation_id)}>
                        Відмовитися
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div> */}

            <div className="main__block block">
              <p className="block__text">Ігри до яких вас запрошують</p>
              <ul className="block__list">
                {gamesYouHaveJoined.map((game) => {
                  return (
                    <li key={game.game_id} className="block__link">
                      <span>{game.game_name}</span>
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
