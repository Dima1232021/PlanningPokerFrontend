const CHANGE_ACTIVE_FORM = "CHANGE_ACTIVE_FORM";

const ADD_YOUR_GAME = "ADD_YOUR_GAME";
const ADD_YOUR_GAMES = "ADD_YOUR_GAMES";

const ADD_GAMES_INVITATIONS = "ADD_GAMES_INVITATIONS";
const ADD_GAME_INVITATION = "ADD_GAME_INVITATION";

const ADD_THE_GAME_YOU_JOINED = "ADD_THE_GAME_YOU_JOINED";

const DELETE_YOUR_GAME = "DELETE_YOUR_GAME";
const DELETE_INVITATION = "DELETE_INVITATION";
const LEAVE_THE_GAME = "LEAVE_THE_GAME";

const defaultState = {
  activeForm: false,
  yourGames: [],
  invitationsToGames: [],
  gameYouHaveJoined: {},
  inTheGame: false,
};

export const gamesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_ACTIVE_FORM:
      return { ...state, activeForm: action.payload };

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
      return { ...state, invitationsToGames: action.payload };

    case ADD_GAME_INVITATION:
      let value = state.invitationsToGames.find(
        (element) => element.game_id === action.payload.game_id
      );
      if (!value) {
        return {
          ...state,
          invitationsToGames: [...state.invitationsToGames, action.payload],
        };
      } else {
        return state;
      }

    case ADD_THE_GAME_YOU_JOINED:
      let game = action.payload.game;
      game.invitation_id = action.payload.invitation_id;
      return {
        ...state,
        gameYouHaveJoined: game,
        inTheGame: true,
      };

    case LEAVE_THE_GAME:
      return { ...state, gameYouHaveJoined: {}, inTheGame: false };

    case DELETE_INVITATION:
      let invitationsToGames = state.invitationsToGames.filter(
        (value) => value.invitation_id !== action.payload.invitationId
      );
      return { ...state, invitationsToGames };

    default:
      return state;
  }
};

export const changeActveFormAction = (payload) => ({
  type: CHANGE_ACTIVE_FORM,
  payload: payload,
});

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

export const deleteYourtGameAction = (payload) => ({
  type: DELETE_YOUR_GAME,
  payload: payload,
});

export const deleteInvitationAction = (payload) => ({
  type: DELETE_INVITATION,
  payload: payload,
});

export const leaveTheGameAction = () => ({
  type: LEAVE_THE_GAME,
});
