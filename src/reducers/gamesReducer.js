const ADD_YOUR_GAME = "ADD_YOUR_GAME";
const DELETE_YOUR_GAME = "DELETE_YOUR_GAME";
const ADD_YOUR_GAMES = "ADD_YOUR_GAMES";
const ADD_GAMES_INVITATIONS = "ADD_GAMES_INVITATIONS";
const ADD_GAME_INVITATION = "ADD_GAME_INVITATION";

const defaultState = {
  error: "",
  yourGames: [],
  showingInvitationsToGames: [],
  gamesYouHaveJoined: [],
};

export const gamesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_YOUR_GAME:
      return { ...state, yourGames: [...state.yourGames, action.payload] };

    case DELETE_YOUR_GAME:
      let yourGames = state.yourGames.filter(
        (value) => value.id !== action.payload
      );
      return { ...state, yourGames };

    case ADD_YOUR_GAMES:
      return { ...state, yourGames: action.payload };

    case ADD_GAMES_INVITATIONS:
      return { ...state, showingInvitationsToGames: action.payload };

    case ADD_GAME_INVITATION:
      return { ...state, showingInvitationsToGames: [...state.showingInvitationsToGames, action.payload] };

    default:
      return state;
  }
};

export const addYourtGameAction = (payload) => ({
  type: ADD_YOUR_GAME,
  payload: payload,
});

export const deleteYourtGameAction = (payload) => ({
  type: DELETE_YOUR_GAME,
  payload: payload,
});

export const addYourtGamesAction = (payload) => ({
  type: ADD_YOUR_GAMES,
  payload: payload,
});

export const addGamesInvitationsAction = (payload) => ({
  type: ADD_GAMES_INVITATIONS,
  payload: payload,
});

export const addGameInvitationAction = (payload) => ({
  type: ADD_GAME_INVITATION,
  payload: payload,
});