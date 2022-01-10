import { API_URL } from "../config";
import {
  changeLoaderGameAction,
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
   fetch (`${API_URL}/game/create`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nameGame, users, stories, justDriving }),
    }).then((value) =>
      value.json().then((data) => {
        console.log(data);
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
      body: JSON.stringify({ gameId }),
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

export function joinTheGame(gameId, addError) {
  return (dispatch) => {
    fetch(`${API_URL}/game/join_the_game`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ gameId }),
    })
      .then((value) =>
        value.json().then((data) => {
          if (data.join_the_game) {
            return dispatch(addTheGameYouJoined(data));
          }
          return addError("Games not found");
        })
      )
      .catch((error) => addError("The server does not respond"));
  };
}

export function searchGameYouHaveJoined() {
  return (dispatch) => {
    dispatch(changeLoaderGameAction(true));
    fetch(`${API_URL}/game/search_game_you_have_joined`, {
      credentials: "include",
    }).then((value) =>
      value.json().then((data) => {
        console.log(data);
        if (data.join_the_game) {
          dispatch(addTheGameYouJoined(data));
        }
        dispatch(changeLoaderGameAction(false));
      })
    );
  };
}

export function leaveTheGame(game, invitationId) {
  return (dispatch) => {
    fetch(`${API_URL}/game/leave_the_game`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        gameId: game.id,
        invitation_id: invitationId,
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

export function declineInvitation(gameId, userId) {
  fetch(`${API_URL}/game/delete_invited`, {
    credentials: "include",
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ gameId, userId }),
  });
}

export function startAPoll(storyId, gameId) {
  fetch(`${API_URL}/game/start_a_poll`, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ storyId, gameId }),
  });
}
export function finishAPoll(gameId) {
  fetch(`${API_URL}/game/flip_card`, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ gameId }),
  });
}
export function resetAPoll(storyId, gameId) {
  fetch(`${API_URL}/game/reset_cards`, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ storyId, gameId }),
  });
}

export function giveAnAnswer(storyId, answer) {
  fetch(`${API_URL}/game/give_an_answer`, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ storyId, answer }),
  });
}

export function addHistory(gameId, body) {
  fetch(`${API_URL}/game/add_history`, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ gameId, body }),
  });
}
export function editHistory(gameId, storyId, body) {
  fetch(`${API_URL}/game/edit_history`, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ gameId, storyId, body }),
  });
}

export function deleteHistory(gameId, storyId) {
  fetch(`${API_URL}/game/delete_history`, {
    credentials: "include",
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ gameId, storyId }),
  });
}

export function playerSettings(gameId) {
  fetch(`${API_URL}/game/player_settings`, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ gameId }),
  });
}

export function changeCardFlipSettings(gameId) {
  fetch(`${API_URL}/game/change_card_flip_settings`, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ gameId }),
  });
}
