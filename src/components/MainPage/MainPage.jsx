import React, { useEffect, useState } from "react";
import { API_URL } from "../../config";
import { ActionCable } from "react-actioncable-provider";
import "./main.scss";

export default function MainPage() {
  const [numberOfUsers, setNumberOfUsers] = useState(null);
  const [users, setUsers] = useState([]);
  const [addPlayers, setAddPlayers] = useState([]);

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
  console.log(addPlayers);

  function addUser(user) {
    let findUser = addPlayers.find((value) => value === user);
    !findUser && setAddPlayers([...addPlayers, user]);
  }
  function deleteUser(user) {
    let arr = addPlayers.filter((value) => value !== user);
    console.log(arr);
    setAddPlayers(arr);
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
      <h1>Main page</h1>
      <h2>користувачі</h2>
      <div className="main__show-user">
        <ul>
          {users.map((user) => {
            return (
              <li key={user.id} onClick={() => addUser(user)}>
                {user.username}
              </li>
            );
          })}
        </ul>
      </div>
      <h2>користувачі які ви плануєте пригласити до гри</h2>
      <div className="main__show-user">
        <ul>
          {addPlayers.map((user) => {
            return (
              <li key={user.id} onClick={() => deleteUser(user)}>
                {user.username}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
