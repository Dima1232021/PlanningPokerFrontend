import React, { useEffect, useState } from "react";
import { API_URL } from "../../config";
import { ActionCable } from "react-actioncable-provider";
import "./main.scss";

export default function MainPage() {
  const [numberOfUsers, setNumberOfUsers] = useState(null);

  const [users, setUsers] = useState([]);
  const [addPlayers, setAddPlayers] = useState([]);
  const [yourGames, setYourGames] = useState([]);

  const [nameGame, setNameGame] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/users/show`, {
      credentials: "include",
    }).then((value) =>
      value.json().then((data) => {
        setUsers(data);
        console.log(data);
      })
    );
  }, [numberOfUsers]);

  function addUser(user) {
    let findUser = addPlayers.find((value) => value === user);
    !findUser && setAddPlayers([...addPlayers, user]);
  }
  function deleteUser(user) {
    let arr = addPlayers.filter((value) => value !== user);
    console.log(arr);
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
        console.log(data);
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

        </div>
      </div>
    </div>
  );
}
