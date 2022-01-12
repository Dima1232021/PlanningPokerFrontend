export const SET_GAMES = "SET_GAMES";
export const SET_IS_LOADING_GAMES = "SET_IS_LOADING_GAMES";

const initialState = {
  isLoading: false,
  ownGames: [],
  invitationsToGames: [],
};

export const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOADING_GAMES:
      return { ...state, isLoading: action.payload };

    case SET_GAMES:
      const { ownGames } = action.payload;
      return { ...state, ownGames };

    default:
      return state;
  }
};
