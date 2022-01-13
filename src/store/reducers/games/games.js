export const SET_GAMES = "SET_GAMES";
export const SET_IS_LOADING_GAMES = "SET_IS_LOADING_GAMES";
export const ADD_OWN_GAME = "ADD_OWN_GAME";

const initialState = {
  isLoading: false,
  ownGames: [],
  gamesInvitation: [],
};

export const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOADING_GAMES:
      return { ...state, isLoading: action.payload };

    case SET_GAMES:
      const { ownGames, gamesInvitation } = action.payload;
      return { ...state, ownGames, gamesInvitation };

    case ADD_OWN_GAME:
      return { ...state, ownGames: [...state.ownGames, action.payload] };

    default:
      return state;
  }
};
