import { API_URL } from "../config";
import {
  addYourtGameAction,
  addYourtGamesAction,
  deleteYourtGameAction,
  addGamesInvitationsAction,
  addTheGameYouJoined,
  addGamesYouHaveJoined,
  deleteInvitationAction,
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

export function joinTheGame({ invitation_id, game_id, game_name }) {
  return (dispatch) => {
    fetch(`${API_URL}/game/join_the_game`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ invitation_id, game_id }),
    }).then((value) =>
      value.json().then((data) => {
        if (data.join_the_game) {
          dispatch(addTheGameYouJoined({ invitation_id, game_id, game_name }));
        }
      })
    );
  };
}

export function showTheGamesYouHaveJoined() {
  return (dispatch) => {
    fetch(`${API_URL}/game/games_you_have_joined`, {
      credentials: "include",
    }).then((value) =>
      value.json().then((data) => {
        dispatch(addGamesYouHaveJoined(data));
      })
    );
  };
}

export function declineInvitation(invitationId, value) {
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
          dispatch(deleteInvitationAction({ invitationId, value }));
        }
      })
    );
  };
}
