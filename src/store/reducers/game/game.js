export const SET_IS_LOADING_GAME = "SET_IS_LOADING_GAME";
export const SET_JOIN_THE_GAME = "JOIN_THE_GAME";
export const SET_IS_ACTIVE_MENU = "SET_IS_ACTIVE_MENU";

const initialState = {
  isLoaderPage: false,
  joinTheGame: false,
  gameId: null,
  driving: { user_id: null, user_name: "" },
  stories: [],
  answers: {},
  nameGame: "",
  urlGame: "",
  game: {},
  historyNumber: 0,
  invitedUsers: [],
  onlineUsers: [],
  onlinePlayers: [],
  isActiveMenu: true,
};

export const gameReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOADING_GAME:
      return { ...state, ...action.payload };

    case SET_JOIN_THE_GAME:
      return { ...state, ...action.payload };

    case SET_IS_ACTIVE_MENU:
      return { ...state, isActiveMenu: action.payload };

    default:
      return state;
  }
};
