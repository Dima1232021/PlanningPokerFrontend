export const SET_GAMES = "SET_GAMES";
export const SET_IS_LOADING_GAMES = "SET_IS_LOADING_GAMES";
export const SET_IS_CREATE_GAME = "SET_IS_CREATE_GAME";
export const ADD_OWN_GAME = "ADD_OWN_GAME";
export const DELETE_GAME_INVITATION = "DELETE_GAME_INVITATION";
export const DELETE_GAME = "DELETE_GAME";
export const SET_ADD_INVITATION = "SET_ADD_INVITATION";

const initialState = {
  isLoadCreateGame: false,
  isLoadOwnGames: false,
  isLoadGamesInv: false,
  isCreateGame: false,
  ownGames: [],
  gamesInvitation: [],
};

export const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOADING_GAMES:
      return { ...state, ...action.payload };

    case SET_IS_CREATE_GAME:
      return { ...state, isCreateGame: action.payload };

    case SET_GAMES:
      const { ownGames, gamesInvitation } = action.payload;
      return { ...state, ownGames, gamesInvitation };

    case ADD_OWN_GAME:
      return { ...state, ownGames: [...state.ownGames, action.payload], isCreateGame: true };

    case DELETE_GAME:
      const games = state.ownGames.filter((game) => game.id != action.payload);
      return { ...state, ownGames: games };

    case DELETE_GAME_INVITATION:
      return { ...state, gamesInvitation: action.payload };

    case SET_ADD_INVITATION:
      return { ...state, gamesInvitation: [...state.gamesInvitation, action.payload] };

    default:
      return state;
  }
};
