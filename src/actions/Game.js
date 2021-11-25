import { API_URL } from "../config";
import {
  addYourtGameAction,
  addYourtGamesAction,
  deleteYourtGameAction,
} from "../reducers/gamesReducer";

export function createGame(nameGame, users, stories, justDriving) {
  return (dispatch) => {
    fetch(`${API_URL}/game/create`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nameGame, users, stories, justDriving }),
    }).then((value) =>
      value.json().then((data) => {
        if (data.status === "created") {
          dispatch(addYourtGameAction(data.game));
        }
      })
    );
  };
}

export function showYoyrGame() {
  return (dispatch) => {
    fetch(`${API_URL}/game/your_games`, {
      credentials: "include",
    }).then((value) =>
      value.json().then((data) => {
        dispatch(addYourtGamesAction(data));
      })
    );
  };
}

export function deleteYoyrGame(game_id) {
  return (dispatch) => {
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
          dispatch(deleteYourtGameAction(game_id));
        }
      })
    );
  };
}
