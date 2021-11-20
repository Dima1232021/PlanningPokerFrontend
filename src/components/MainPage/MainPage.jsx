import React, { useEffect, useState } from "react";
import { API_URL } from "../../config";
import { ActionCable } from "react-actioncable-provider";
import "./main.scss";

export default function MainPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/new_game/users`, {}).then((value) =>
      value.json().then((data) => {
        // setUsers(data);
        console.log(data);
      })
    );
  }, []);
  console.log(users);

  return (
    <div className="main">
      {
        <ActionCable
          channel={{ channel: "ShowUsersChannel" }}
          onReceived={(value) => {
            console.log("value", value);
          }}
        />
      }
      <h1>Main page</h1>
      <h2>користувачі</h2>
    </div>
  );
}
