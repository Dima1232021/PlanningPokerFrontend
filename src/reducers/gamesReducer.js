const ADD_YOUR_GAME = "ADD_YOUR_GAME";
const ADD_YOUR_GAMES = "ADD_YOUR_GAMES";

const ADD_GAMES_INVITATIONS = "ADD_GAMES_INVITATIONS";
const ADD_GAME_INVITATION = "ADD_GAME_INVITATION";

const ADD_THE_GAME_YOU_JOINED = "ADD_THE_GAME_YOU_JOINED";
const ADD_GAMES_YOU_HAVE_JOINED = "ADD_GAMES_YOU_HAVE_JOINED";

const DELETE_YOUR_GAME = "DELETE_YOUR_GAME";
const DELETE_INVITATION = "DELETE_INVITATION";

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
      return {
        ...state,
        showingInvitationsToGames: [
          ...state.showingInvitationsToGames,
          action.payload,
        ],
      };

    case ADD_THE_GAME_YOU_JOINED:
      let showingInvitationsToGames = state.showingInvitationsToGames.filter(
        (value) => value.invitation_id !== action.payload.invitation_id
      );
      return {
        ...state,
        gamesYouHaveJoined: [...state.gamesYouHaveJoined, action.payload],
        showingInvitationsToGames,
      };

    case ADD_GAMES_YOU_HAVE_JOINED:
      return {
        ...state,
        gamesYouHaveJoined: action.payload,
      };

    case DELETE_INVITATION:
      let showingInv = state.showingInvitationsToGames.filter(
        (value) => value.invitation_id !== action.payload
      );
      let gamesYouHaveJoined = state.gamesYouHaveJoined.filter(
        (value) => value.invitation_id !== action.payload
      );
      return {
        ...state,
        showingInvitationsToGames: showingInv,
        gamesYouHaveJoined,
      };

    default:
      return state;
  }
};

export const addYourtGameAction = (payload) => ({
  type: ADD_YOUR_GAME,
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

export const addTheGameYouJoined = (payload) => ({
  type: ADD_THE_GAME_YOU_JOINED,
  payload: payload,
});

export const addGamesYouHaveJoined = (payload) => ({
  type: ADD_GAMES_YOU_HAVE_JOINED,
  payload: payload,
});

export const deleteYourtGameAction = (payload) => ({
  type: DELETE_YOUR_GAME,
  payload: payload,
});

export const deleteInvitationAction = (payload) => ({
  type: DELETE_INVITATION,
  payload: payload,
});
