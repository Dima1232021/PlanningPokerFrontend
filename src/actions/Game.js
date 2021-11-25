import { API_URL } from "../config";

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
        console.log("створити гру: ", data);
      })
    );
  };
}
