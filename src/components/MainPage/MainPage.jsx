import React, { useEffect, useState } from "react";
import { API_URL } from "../../config";
import { ActionCable } from "react-actioncable-provider";
import "./main.scss";

export default function MainPage() {
  const [numberOfUsers, setNumberOfUsers] = useState(null);

  const [users, setUsers] = useState([]);
  const [addPlayers, setAddPlayers] = useState([]);
  const [yourGames, setYourGames] = useState([]);
  const [invitedGames, setInvitedGames] = useState([]);

  const [nameGame, setNameGame] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/users/show`, {
      credentials: "include",
    }).then((value) =>
      value.json().then((data) => {
        setUsers(data);
        // console.log(data);
      })
    );
  }, [numberOfUsers]);

  useEffect(() => {
    fetch(`${API_URL}/game/your_games`, {
      credentials: "include",
    }).then((value) =>
      value.json().then((data) => {
        setYourGames(data);
      })
    );
  }, []);

  useEffect(() => {
    fetch(`${API_URL}/game/invited_games`, {
      credentials: "include",
    }).then((value) =>
      value.json().then((data) => {
        setInvitedGames(data);
        // console.log(data);
      })
    );
  }, []);

  function addUser(user) {
    let findUser = addPlayers.find((value) => value === user);
    !findUser && setAddPlayers([...addPlayers, user]);
  }

  function deleteUser(user) {
    let arr = addPlayers.filter((value) => value !== user);
    setAddPlayers(arr);
  }

  function createGame() {
    fetch(`${API_URL}/game/create`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: nameGame, users: addPlayers }),
    }).then((value) =>
      value.json().then((data) => {
        setYourGames([...yourGames, data.game]);
        // console.log("створити гру: ", data);
      })
    );
  }

  function deleteGame(game_id) {
    fetch(`${API_URL}/game/delete_game`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ game_id }),
    }).then((value) =>
      value.json().then((data) => {
        if (data.delete_game) {
          let arr = yourGames.filter((value) => value.id !== game_id);
          setYourGames(arr);
        }
      })
    );
  }

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
        if (data.delete_invited) {
          let arr = invitedGames.filter(
            (value) => value.invitation_id !== invitation_id
          );
          setInvitedGames(arr);
        }
      })
    );
  }

  return (
    <div className="main">
      {
        <ActionCable
          channel={{ channel: "ShowUsersChannel" }}
          onReceived={(value) => {
            setNumberOfUsers(value);
          }}
        />
      }
      <div className="container">
        <div className="main__row">
          <h2 className="main__title">Cтворити нову гру</h2>

          <div className="main__block block">
            <h2 className="block__title">користувачі</h2>
            <ul className="block__list">
              {users.map((user) => {
                return (
                  <li key={user.id} onClick={() => addUser(user)}>
                    {user.username}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="main__block block">
            <h2 className="block__title">
              користувачі які ви плануєте пригласити до гри
            </h2>
            <ul className="block__list">
              {addPlayers.map((user) => {
                return (
                  <li key={user.id} onClick={() => deleteUser(user)}>
                    {user.username}
                  </li>
                );
              })}
            </ul>
          </div>

          <input
            type="text"
            placeholder="Назва гри"
            value={nameGame}
            onChange={(e) => setNameGame(e.target.value)}
          />
          <button onClick={createGame}>Створити гру</button>
        </div>

        <div className="main__row">
          <div className="main__block block">
            <h2 className="block__title">Ігри які ви створили</h2>
            <ul className="block__list">
              {yourGames.map((game) => {
                return (
                  <li key={game.id} className="block__link">
                    {game.name}
                    <button onClick={() => deleteGame(game.id)}>
                      Видалити гру
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="main__block block">
            <h2 className="block__title">Ігри до яких вас запрошують</h2>
            <ul className="block__list">
              {invitedGames.map((game) => {
                return (
                  <li key={game.invitation_id} className="block__link">
                    {game.game_name}
                    <button onClick={() => deleteInvited(game.invitation_id)}>
                      Відклонити запрос
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="main__block block">
            <h2 className="block__title">Ігри до яких ви приєдналися</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
