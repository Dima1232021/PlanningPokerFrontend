const ADD_YOUR_GAME = "ADD_YOUR_GAME";
const DELETE_YOUR_GAME = "DELETE_YOUR_GAME";
const ADD_YOUR_GAMES = "ADD_YOUR_GAMES";

const defaultState = {
  error: "",
  yourGames: [],
  invitedGames: [],
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
