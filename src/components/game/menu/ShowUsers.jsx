import React from "react";
import { useSelector } from "react-redux";

function ShowUsers() {
  const { onlineUsers } = useSelector((state) => state.game);
  return (
    <div className="game-menu__row">
      <div className="game-menu__header">
        <h3 className="game-menu__title-2">Users</h3>
      </div>

      <ul className="game-menu__list">
        {onlineUsers.map((user) => {
          return (
            <li key={user.id} className="game-menu__link">
              <p className="game-menu__text">{user.username}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ShowUsers;
