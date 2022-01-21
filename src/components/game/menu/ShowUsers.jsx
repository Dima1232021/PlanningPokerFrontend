import React from "react";
import { useSelector } from "react-redux";
import { useActions, useAddErrors, useConfirm } from "../../../hooks";

function ShowUsers() {
  const { confirm } = useConfirm();
  const { addError } = useAddErrors();
  const { changeStatusUserAction } = useActions();
  const { userId } = useSelector((state) => state.auth);
  const { onlineUsers, driving, statusChange, gameId } = useSelector((state) => state.game);

  async function changeStatusUser(user) {
    const isConfirmed = await confirm("You want to change the status ?");
    return isConfirmed && changeStatusUserAction({ userId: user.id, gameId }, addError);
  }
  return (
    <div className="game-menu__row">
      <div className="game-menu__header">
        <h3 className="game-menu__title-2">Users</h3>
      </div>

      <ul className="game-menu__list">
        {onlineUsers.map((user) => {
          return (
            <li key={user.id} className="game-menu__link">
              <div className="game-menu__users">
                <p className="game-menu__text">{user.username}</p>

                {driving.user_id === userId || (user.id === userId && statusChange) ? (
                  <button
                    onClick={() => changeStatusUser(user)}
                    className="game-menu__btn-status btn"
                  >
                    {user.player ? "Player" : "Spectator"}
                  </button>
                ) : (
                  <p className="game-menu__text-status">{user.player ? "Player" : "Spectator"}</p>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ShowUsers;
