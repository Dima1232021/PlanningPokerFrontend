import { API_URL } from "../config";
import {
  changeActveFormAction,
  addYourtGameAction,
  addYourtGamesAction,
  deleteYourtGameAction,
  addGamesInvitationsAction,
  addTheGameYouJoined,
  deleteInvitationAction,
  leaveTheGameAction,
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
          dispatch(addYourtGameAction(data.game), changeActveFormAction(false));
          dispatch(changeActveFormAction(false));
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

export function joinTheGame(game_id, invitation_id = false) {
  return (dispatch) => {
    fetch(`${API_URL}/game/join_the_game`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ game_id, invitation_id }),
    }).then((value) =>
      value.json().then((data) => {
        if (data.join_the_game) {
          dispatch(addTheGameYouJoined(data));
        }
      })
    );
  };
}

export function searchGameYouHaveJoined() {
  return (dispatch) => {
    fetch(`${API_URL}/game/search_game_you_have_joined`, {
      credentials: "include",
    }).then((value) =>
      value.json().then((data) => {
        if (data.join_the_game) {
          dispatch(addTheGameYouJoined(data));
        }
      })
    );
  };
}

export function leaveTheGame(game) {
  return (dispatch) => {
    fetch(`${API_URL}/game/leave_the_game`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        game_id: game.id,
        invitation_id: game.invitation_id,
      }),
    }).then((value) =>
      value.json().then((data) => {
        console.log(data);
        if (data.leavet_he_game) {
          dispatch(leaveTheGameAction());
        }
      })
    );
  };
}

export function declineInvitation(invitationId) {
  return (dispatch) => {
    fetch(`${API_URL}/game/delete_invited`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ invitation_id: invitationId }),
    }).then((date1) =>
      date1.json().then((data2) => {
        if (data2.delete_invited) {
          dispatch(deleteInvitationAction({ invitationId }));
        }
      })
    );
  };
}
