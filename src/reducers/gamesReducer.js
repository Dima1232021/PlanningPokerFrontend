const CHANGE_LOADER_GAME = "CHANGE_LOADER_GAME";
const CHANGE_ACTIVE_FORM = "CHANGE_ACTIVE_FORM";
const CHANGE_GAME_YOU_HAVE_JOINED = "CHANGE_GAME_YOU_HAVE_JOINED";
const CHANGE_HISTORY_NUMBER = "CHANGE_HISTORY_NUMBER";
const CHANGE_INVITED_PLAYERS = "CHANGE_INVITED_PLAYERS";
const CHANGE_PLAYERS_ONLINE = "CHANGE_PLAYERS_ONLINE";
const ADD_YOUR_GAME = "ADD_YOUR_GAME";
const ADD_YOUR_GAMES = "ADD_YOUR_GAMES";
const ADD_GAMES_INVITATIONS = "ADD_GAMES_INVITATIONS";
const ADD_GAME_INVITATION = "ADD_GAME_INVITATION";
const ADD_THE_GAME_YOU_JOINED = "ADD_THE_GAME_YOU_JOINED";
const ADD_ANSWERS = "ADD_ANSWERS";
const ADD_STORY = "ADD_STORY";
const DELETE_YOUR_GAME = "DELETE_YOUR_GAME";
const DELETE_INVITATION = "DELETE_INVITATION";
const LEAVE_THE_GAME = "LEAVE_THE_GAME";

const defaultState = {
  loaderGame: false,
  activeForm: false,
  yourGames: [],
  invitationsToGames: [],
  gameYouHaveJoined: {},
  inTheGame: false,
  invitationId: null,
  stories: [],
  answers: {},
  gameId: null,
  historyNumber: 0,
  invitedUsers: [],
  onlineUsers: [],
  onlinePlayers: [],
};

export const gamesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LOADER_GAME:
      return { ...state, loaderGame: action.payload };

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
      return {
        ...state,
        invitationsToGames: [...state.invitationsToGames, action.payload],
      };

    case ADD_THE_GAME_YOU_JOINED:
      return {
        ...state,
        gameId: action.payload.game.id,
        gameYouHaveJoined: action.payload.game,
        invitationId: action.payload.invitation_id,
        inTheGame: true,
        stories: action.payload.stories,
        answers: action.payload.answers,
        invitedUsers: action.payload.invitedUsers,
        onlineUsers: action.payload.onlineUsers,
        onlinePlayers: action.payload.onlinePlayers,
      };

    case LEAVE_THE_GAME:
      return {
        ...state,
        gameYouHaveJoined: {},
        inTheGame: false,
        invitationId: null,
        stories: [],
        answers: {},
        gameId: null,
      };

    case DELETE_INVITATION:
      let invitationsToGames = state.invitationsToGames.filter(
        (value) => value.invitation_id !== action.payload
      );

      if (action.payload === state.invitationId) {
        return {
          ...state,
          invitationsToGames,
          gameYouHaveJoined: {},
          inTheGame: false,
          invitationId: null,
          gameId: null,
        };
      }
      return { ...state, invitationsToGames };

    case CHANGE_GAME_YOU_HAVE_JOINED:
      return { ...state, gameYouHaveJoined: action.payload };

    case ADD_ANSWERS:
      return {
        ...state,
        gameYouHaveJoined: action.payload.game,
        answers: action.payload.answers,
      };

    case CHANGE_HISTORY_NUMBER:
      return { ...state, historyNumber: action.payload };

    case ADD_STORY:
      if (action.payload.answers) {
        return {
          ...state,
          stories: action.payload.stories,
          answers: action.payload.answers,
          historyNumber: 0,
        };
      }
      return {
        ...state,
        stories: action.payload.stories,
      };

    case CHANGE_INVITED_PLAYERS:
      return { ...state, invitedPlayers: action.payload };

    case CHANGE_PLAYERS_ONLINE:
      console.log("CHANGE_PLAYERS_ONLINE", action.payload);
      return {
        ...state,
        onlineUsers: action.payload.onlineUsers,
        onlinePlayers: action.payload.onlinePlayers,
      };

    default:
      return state;
  }
};

export const changeLoaderGameAction = (payload) => ({
  type: CHANGE_LOADER_GAME,
  payload: payload,
});

export const changeActveFormAction = (payload) => ({
  type: CHANGE_ACTIVE_FORM,
  payload: payload,
});

export const changeGameYouHaveJoinedAction = (payload) => ({
  type: CHANGE_GAME_YOU_HAVE_JOINED,
  payload: payload,
});

export const changeHistoryNumberAction = (payload) => ({
  type: CHANGE_HISTORY_NUMBER,
  payload: payload,
});

export const changeInvitedPlayersAction = (payload) => ({
  type: CHANGE_INVITED_PLAYERS,
  payload: payload,
});

export const changePlayersOnlineAction = (payload) => ({
  type: CHANGE_PLAYERS_ONLINE,
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

export const addAnswersAction = (payload) => ({
  type: ADD_ANSWERS,
  payload: payload,
});
export const addStoryAction = (payload) => ({
  type: ADD_STORY,
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
