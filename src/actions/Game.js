import { API_URL } from "../config";
import {
  addYourtGameAction,
  addYourtGamesAction,
  deleteYourtGameAction,
  addGamesInvitationsAction,
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

export function deleteYoyrGame(gameId) {
  return (dispatch) => {
    fetch(`${API_URL}/game/delete_game`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ game_id: gameId }),
    }).then((value) =>
      value.json().then((data) => {
        if (data.delete_game) {
          dispatch(deleteYourtGameAction(gameId));
        }
      })
    );
  };
}

export function showingYourInvitationsToGames() {
  return (dispatch) => {
    fetch(`${API_URL}/game/invited_games`, {
      credentials: "include",
    }).then((value) =>
      value.json().then((data) => {
        dispatch(addGamesInvitationsAction(data));
      })
    );
  };
}

// export function deleteInvited(invitation_id) {
//     fetch(`${API_URL}/game/delete_invited`, {
//       credentials: "include",
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ invitation_id }),
//     }).then((value) =>
//       value.json().then((data) => {
//         // console.log(data)
//         if (data.delete_invited) {
//           let arr1 = invitedGames.filter(
//             (value) => value.invitation_id !== invitation_id
//           );
//           let arr2 = gamesYouHaveJoined.filter(
//             (value) => value.invitation_id !== invitation_id
//           );
//           setInvitedGames(arr1);
//           setGamesYouHaveJoined(arr2);
//         }
//       })
//     );
//   }
